

CREATE TABLE subjects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(7) DEFAULT '#3498db',
  icon VARCHAR(50) DEFAULT 'book', 
  user_id VARCHAR(50) NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  UNIQUE KEY uq_user_subject (name, user_id),
  
  FOREIGN KEY (user_id) REFERENCES users(student_code) ON DELETE CASCADE

);
SELECT id, name, color, icon, user_id, created_at, updated_at 
FROM subjects 
WHERE user_id = 'USER_ID_CAN_TIM';
SELECT id, name, color, icon, user_id, created_at, updated_at 
FROM subjects 
WHERE id = 123;

UPDATE subjects 
SET name = 'Tên môn học mới', 
    color = '#2ecc71', 
    icon = 'laptop' 
WHERE id = 123;


DELETE FROM subjects 
WHERE id = 123;
DELETE FROM subjects 
WHERE user_id = 'USER_ID_CAN_XOA';
