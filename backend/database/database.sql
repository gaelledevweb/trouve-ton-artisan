-- Création de la base de données
CREATE DATABASE IF NOT EXISTS trouve_ton_artisan;
USE trouve_ton_artisan;

-- Table des catégories 
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table des spécialités 
CREATE TABLE specialties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Table des artisans
CREATE TABLE artisans (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    specialty_id INT,
    note DECIMAL(2,1) DEFAULT 0.0, 
    location VARCHAR(255) NOT NULL, 
    about TEXT, 
    email VARCHAR(255) NOT NULL, 
    website VARCHAR(255),
    image_url VARCHAR(255), 
    is_top_artisan BOOLEAN DEFAULT FALSE, 
    FOREIGN KEY (specialty_id) REFERENCES specialties(id) ON DELETE SET NULL
);