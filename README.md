#  Dự Án: Student_Deadline_Manager

Hệ thống hỗ trợ sinh viên quản lý lịch trình, danh mục môn học và theo dõi thời hạn (deadline) công việc một cách khoa học. Dự án được triển khai trên môi trường Node.js kết hợp Cơ sở dữ liệu quan hệ SQLite.

##  Thành viên thực hiện phần hành
* **Sinh viên thực hiện:** [Điền Tên Bạn Vào Đây]
* **MSSV:** [Điền MSSV Vào Đây]

---

## 💾 Cấu trúc Cơ sở dữ liệu Thực thể Môn học (`subjects`)
Dữ liệu danh mục môn học được thiết kế chuẩn hóa và đồng bộ với hệ thống thông qua các trường thông tin:
* `id`: Khóa chính định danh tự động tăng (`INTEGER PRIMARY KEY AUTOINCREMENT`).
* `name`: Tên môn học (`VARCHAR(100)`), không được phép bỏ trống.
* `color`: Mã màu HEX dạng chuỗi (`VARCHAR(7)`) phục vụ phân loại trực quan trên giao diện.
* `icon`: Chuỗi định danh biểu tượng (`VARCHAR(50)`) của môn học.
* `user_id`: Khóa ngoại liên kết trực tiếp với bảng người dùng (`users`).
* *Ràng buộc Đặc biệt:* `UNIQUE KEY uq_user_subject (name, user_id)` nhằm chống trùng lặp môn học trên cùng một tài khoản sinh viên.

---

## 🚀 Các tính năng CRUD đã hoàn thiện bằng SQL Queries
Dự án áp dụng các câu lệnh SQL thuần túy tương tác với thư viện `sqlite3` để thực thi 4 nhóm chức năng cốt lõi:

### 1. Create (Thêm mới môn học)
Sử dụng câu lệnh `INSERT INTO` để khởi tạo bản ghi mới dựa trên dữ liệu đầu vào.
```sql
INSERT INTO subjects (name, color, icon, user_id) VALUES (?, ?, ?, ?);