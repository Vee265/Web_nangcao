const { Sequelize } = require('sequelize');

// Khởi tạo database SQLite lưu trực tiếp thành một file trong thư mục của bạn
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // File cơ sở dữ liệu sẽ tự sinh ra ở đây
  logging: false
});

module.exports = sequelize;