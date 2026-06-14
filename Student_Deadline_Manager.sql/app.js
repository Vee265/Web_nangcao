const express = require('express'); 
const app = express();               

const sequelize = require('./atd');   
const Subject = require('./subject'); 

// Cấu hình để đọc được dữ liệu JSON từ Postman gửi lên
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- ĐỊNH NGHĨA ROUTE CHO API ----

// 1. API lấy danh sách môn học (Dùng phương thức GET)
app.get('/api/subjects', async (req, res) => {
  try {
    const listSubjects = await Subject.findAll();
    res.status(200).json({ success: true, data: listSubjects });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. API thêm môn học mới (Dùng phương thức POST)
app.post('/api/subjects', async (req, res) => {
  try {
    const newSubject = await Subject.create({
      name: req.body.name,
      color: req.body.color,
      icon: req.body.icon
    });
    res.status(201).json({ success: true, message: 'Thêm môn học thành công!', data: newSubject });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Hàm khởi chạy toàn bộ ứng dụng
const startApp = async () => {
  try {
    // Kết nối SQLite cục bộ
    await sequelize.authenticate();
    console.log('✅ Kết nối cơ sở dữ liệu thành công!');

    // Tự động tạo bảng Subjects nếu chưa có
    await sequelize.sync({ alter: true });
    console.log('✅ Cơ sở dữ liệu và bảng Subjects đã được đồng bộ thành công!');

    // Khởi chạy server Express ở cổng 3000
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server đang chạy tại cổng http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error('❌ Không thể kết nối hoặc đồng bộ DB:', error);
  }
};

// Gọi hàm khởi chạy hệ thống
startApp();