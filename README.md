Ce projet est une plateforme web permettant de mettre en relation des particuliers avec des artisans de la région Auvergne-Rhône-Alpes.

## Fonctionnalités
- Affichage des artisans du mois (Top artisans).
- Recherche d'artisans par catégories et par nom.
- Fiches profils détaillées avec système de notation.
- Formulaire de contact direct.
- Design responsive (Mobile, Tablette, Desktop).

## Technologies utilisées
- Frontend : React.js, Bootstrap 5, SCSS.
- Backend : Node.js, Express.
- Base de données : MySQL.

## Installation et lancement

### 1. Prérequis
- Node.js installé sur votre machine.
- Un serveur MySQL (XAMPP, WampServer ou MySQL Workbench).

### 2. Configuration de la base de données
1. Importez les fichiers `.sql` fournis dans le dossier `/database`, ou à la racine dans votre outil MySQL.
2. Créez un fichier `.env` dans le dossier serveur avec vos identifiants :
.env
   DB_HOST=localhost
   DB_USER=votre_utilisateur
   DB_PASS=votre_mot_de_passe
   DB_NAME=trouve_ton_artisan
3. Lancement du Backend
Bash
cd backend
npm install
npm run start
4. Lancement du Frontend
Ouvrez un nouveau terminal :

Bash
cd frontend
npm install
npm start 
