CREATE DATABASE IF NOT EXISTS appdb;

USE appdb;

CREATE TABLE IF NOT EXISTS signals (
                                       id INT AUTO_INCREMENT PRIMARY KEY,
                                       symbol VARCHAR(10),
    `signal` VARCHAR(10),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

