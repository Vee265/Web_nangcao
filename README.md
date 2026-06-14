### 📚 Quản lý Môn học/Danh mục (Subjects Component)
Hiện thực chức năng CRUD cho thực thể `subjects` liên kết trực tiếp với tài khoản người dùng:
- **Create:** Khởi tạo môn học kèm cấu hình mã màu Hex (`color`) và biểu tượng (`icon`). Áp dụng ràng buộc `UNIQUE` chống trùng lặp tên môn trên cùng một tài khoản.
- **Read:** Liệt kê danh sách danh mục cá nhân hóa theo từng `user_id`.
- **Update:** Thay đổi linh hoạt các thuộc tính nhận diện của môn học.
- **Delete:** Xóa môn học đồng thời kích hoạt cơ chế `ON DELETE SET NULL` đối với các công việc (`tasks`) liên quan để bảo toàn dữ liệu lịch trình.
