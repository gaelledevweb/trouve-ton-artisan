-- Insertion des catégories
INSERT INTO categories (name) VALUES 
('Bâtiment'), ('Services'), ('Fabrication'), ('Alimentation');

-- Insertion des spécialités 
INSERT INTO specialties (name, category_id) VALUES 
('Plomberie', 1), ('Coiffure', 2), ('Ébénisterie', 3), ('Boulangerie', 4);

-- Insertion artisans du mois
INSERT INTO artisans (name, specialty_id, note, location, about, email, is_top_artisan) VALUES 
('Jean Plombier', 1, 4.5, 'Lyon', 'Expert en dépannage urgent.', 'jean@example.com', true),
('Sophie Coiffure', 2, 4.8, 'Saint-Étienne', 'Coiffure à domicile.', 'sophie@example.com', true),
('Le Bon Pain', 4, 4.2, 'Grenoble', 'Artisan boulanger depuis 20 ans.', 'contact@lebonpain.fr', true),
('Menuiserie Durand', 3, 3.9, 'Clermont-Ferrand', 'Création de meubles sur mesure.', 'durand@example.com', false);