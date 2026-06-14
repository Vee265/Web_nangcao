INSERT INTO subjects (name, color, icon, user_id) 
VALUES ('Công nghệ phần mềm', '#3498db', 'book', 1);
SELECT id, name, color, icon 
FROM subjects 
WHERE user_id = 1;
SELECT * FROM subjects WHERE id = 5 AND user_id = 1;
UPDATE subjects 
SET name = 'Kiến trúc phần mềm', color = '#e74c3c', icon = 'code' 
WHERE id = 5 AND user_id = 1;
DELETE FROM subjects 
WHERE id = 5 AND user_id = 1;