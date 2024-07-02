# MySQL2
 
Simple project for learning MySQL2.

install MYSQL and mysql2

$ mysql -u root -p

mysql> CREATE DATABASE exampledb;
mysql> USE exampledb;

mysql> CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

mysql> INSERT INTO users (name, email) VALUES 
('John Doe', 'john.doe@example.com'), 
('Jane Smith', 'jane.smith@example.com');

How to run?

$ node index.js