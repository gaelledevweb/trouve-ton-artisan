-- Création de la base
CREATE DATABASE IF NOT EXISTS bd_trouve_ton_artisan;
USE bd_trouve_ton_artisan;

-- Table Catégories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Table Spécialités
CREATE TABLE specialties (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE
);

-- Table Artisans
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

-- Données de test
INSERT INTO categories (id, name) VALUES (1, 'Bâtiment'), (2, 'Services');
INSERT INTO specialties (id, name, category_id) VALUES (1, 'Plomberie', 1), (2, 'Nettoyage', 2);
INSERT INTO artisans (name, specialty_id, note, location, about, email, is_top_artisan) 
VALUES ('Plomberie Express', 1, 4.5, 'Vichy', 'Expert...', 'test@test.fr', 0);