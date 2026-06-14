
const { DataTypes } = require('sequelize');
const sequelize = require('./atd'); 

const Subject = sequelize.define('Subject', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  color: {
    type: DataTypes.STRING(7),
    defaultValue: '#3498db'
  },
  icon: {
    type: DataTypes.STRING(50),
    defaultValue: 'book'
  },
  user_id: { // Sửa từ userId thành user_id theo đúng bảng SQL mới
    type: DataTypes.STRING(50),
    allowNull: false,
    field: 'user_id' 
  }
}, {
  tableName: 'subjects', // Đảm bảo Sequelize tìm đúng tên bảng viết thường
  underscored: true,     // Tự động hiểu các trường thời gian là created_at và updated_at
  timestamps: true
});

module.exports = Subject;