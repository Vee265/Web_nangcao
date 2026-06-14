CREATE TABLE tasks (
id CHAR(36) PRIMARY KEY,
title VARCHAR(100) NOT NULL,
type VARCHAR(20) NOT NULL,
dateTime DATETIME NOT NULL,
room VARCHAR(50) NULL,
notes TEXT NULL,
status VARCHAR(20) DEFAULT 'PENDING',

user_id INT,                      
category_id CHAR(36),


FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL