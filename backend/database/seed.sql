-- Nettoyage sécurisé des tables
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE artisans;
TRUNCATE TABLE specialties;
TRUNCATE TABLE categories;
SET FOREIGN_KEY_CHECKS = 1;

-- Insertion des Catégories
INSERT INTO categories (id, name) VALUES 
(1, 'Bâtiment'), 
(2, 'Services'), 
(3, 'Fabrication'), 
(4, 'Alimentation');

-- Insertion des Spécialités (Lien avec les catégories)
INSERT INTO specialties (id, name, category_id) VALUES 
(1, 'Plombier', 1), (2, 'Electricien', 1), (3, 'Menuisier', 1), (4, 'Chauffagiste', 1),
(5, 'Bijoutier', 3), (6, 'Couturier', 3), (7, 'Ferronier', 3),
(8, 'Coiffeur', 2), (9, 'Fleuriste', 2), (10, 'Toiletteur', 2), (11, 'Webdesign', 2),
(12, 'Boucher', 4), (13, 'Boulanger', 4), (14, 'Chocolatier', 4), (15, 'Traiteur', 4);

-- Insertion des Artisans
INSERT INTO artisans (name, specialty_id, note, location, about, email, website, is_top_artisan) VALUES
('Boucherie Dumont', 12, 4.5, 'Lyon', 'Boucherie artisanale de qualité.', 'boucherie.dumont@gmail.com', NULL, 0),
('Au pain chaud', 13, 4.8, 'Montélimar', 'Boulangerie traditionnelle.', 'aupainchaud@hotmail.com', NULL, 1),
('Chocolaterie Labbé', 14, 4.9, 'Lyon', 'Maître chocolatier.', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1),
('Traiteur Truchon', 15, 4.1, 'Lyon', 'Traiteur pour événements.', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0),
('Orville Salmons', 4, 5.0, 'Evian', 'Chauffagiste expert.', 'o-salmons@live.com', NULL, 1),
('Mont Blanc Eléctricité', 2, 4.5, 'Chamonix', 'Installations électriques.', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0),
('Boutot & fils', 3, 4.7, 'Bourg-en-Bresse', 'Menuiserie familiale.', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0),
('Vallis Bellemare', 1, 4.0, 'Vienne', 'Plomberie et dépannage.', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0),
('Claude Quinn', 5, 4.2, 'Aix-les-bains', 'Bijouterie fine.', 'claude.quinn@gmail.com', NULL, 0),
('Amitee Lécuyer', 6, 4.5, 'Annecy', 'Couture et retouches.', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0),
('Ernest Carignan', 7, 5.0, 'Le Puy-en-Velay', 'Ferronnerie d''art.', 'e-carignan@hotmail.com', NULL, 0),
('Royden Charbonneau', 8, 3.8, 'Saint-Priest', 'Coiffure styliste.', 'r.charbonneau@gmail.com', NULL, 0),
('Leala Dennis', 8, 3.8, 'Chambéry', 'Salon de coiffure.', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0),
('C''est sup''hair', 8, 4.1, 'Romans-sur-Isère', 'Coiffure tendance.', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0),
('Le monde des fleurs', 9, 4.6, 'Annonay', 'Artisan fleuriste.', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0),
('Valérie Laderoute', 10, 4.5, 'Valence', 'Toilettage canin.', 'v-laderoute@gmail.com', NULL, 0),
('CM Graphisme', 11, 4.4, 'Valence', 'Webdesign et identité visuelle.', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0);