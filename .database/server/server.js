const express = require('express');
const mysql = require('mysql2/promise');
const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(express.json());


async function getDBConnection() {
    return await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'defaultdb',
        port: process.env.DB_PORT,
        ssl: { rejectUnauthorized: false }
    });
}


async function autoCreateTables() {
    try {
        const connection = await getDBConnection();
        console.log("-> Đang kiểm tra cấu trúc Database...");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS TUTOR (
                Tut_Id VARCHAR(10) NOT NULL,
                DoB DATE NOT NULL,
                HOURS DOUBLE NULL,
                PRIMARY KEY (Tut_Id)
            );
        `);

        
        await connection.query(`
            CREATE TABLE IF NOT EXISTS STUDENT (
                SID VARCHAR(10) NOT NULL,
                SNAME VARCHAR(30) NOT NULL,
                EMAIL VARCHAR(30) NOT NULL,
                Tutor_Id VARCHAR(10) NULL,
                PRIMARY KEY (SID),
                FOREIGN KEY (Tutor_Id) REFERENCES TUTOR (Tut_Id) ON DELETE SET NULL ON UPDATE CASCADE
            );
        `);

        console.log("-> Kích hoạt Database thành công! Các bảng đã sẵn sàng.");
        await connection.end();
    } catch (error) {
        console.error("❌ Lỗi khởi tạo cấu trúc bảng:", error.message);
    }
}


autoCreateTables();


app.get('/api/students', async (req, res) => {
    try {
        const connection = await getDBConnection();
        const [rows] = await connection.query('SELECT * FROM STUDENT');
        await connection.end();
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Lỗi hàm GET!', details: error.message });
    }
});


app.post('/api/students', async (req, res) => {
    const { student_id, name, email } = req.body; 

    if (!student_id || !name) {
        return res.status(400).json({ error: 'Vui lòng điền mã sinh viên và tên!' });
    }

    try {
        const connection = await getDBConnection();
        const sql = 'INSERT INTO STUDENT (SID, SNAME, EMAIL, Tutor_Id) VALUES (?, ?, ?, null)';
        await connection.query(sql, [student_id, name, email]);
        await connection.end();
        
        res.status(201).json({ message: 'Thêm sinh viên mới thành công!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            error: 'Lỗi thêm dữ liệu!', 
            details: error.message,
            code: error.code 
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy ổn định tại port ${PORT}`);S
});