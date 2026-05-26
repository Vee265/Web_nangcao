const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

async function importSQL() {
  // 1. Kết nối ban đầu tới defaultdb của Aiven để tạo cơ sở dữ liệu mới
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'defaultdb', // Kết nối vào DB mặc định trước
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
    multipleStatements: true // Bắt buộc bật tính năng này để chạy nhiều lệnh SQL một lúc
  });

  try {
    console.log('⏳ Đang đọc file setup.sql...');
    // Đọc nội dung file SQL bài tập của bạn
    const sqlPath = path.join(__dirname, 'setup.sql');
    const sqlQueries = fs.readFileSync(sqlPath, 'utf8');

    console.log('🚀 Đang tiến hành nạp cấu trúc và dữ liệu bài tập lên Aiven...');
    // Chạy toàn bộ file SQL
    await connection.query(sqlQueries);
    console.log('✅ Chúc mừng! Đã nạp thành công toàn bộ cơ sở dữ liệu STUDENTSREG lên Aiven!');

  } catch (error) {
    console.error('❌ Thất bại! Có lỗi xảy ra khi nạp SQL:', error.message);
  } finally {
    await connection.end();
    console.log('🔌 Đã đóng kết nối.');
  }
}

importSQL();