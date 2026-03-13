const sequelize = require('../config/database');

// Import de TOUS les modèles
const Category = require('./Category');
const Specialty = require('./Specialty'); 
const Artisan = require('./Artisan');

// Définition des RELATIONS 
// Une Catégorie a plusieurs Spécialités
Category.hasMany(Specialty, { foreignKey: 'category_id' });
Specialty.belongsTo(Category, { foreignKey: 'category_id' });

// Une Spécialité a plusieurs Artisans
Specialty.hasMany(Artisan, { foreignKey: 'specialty_id' });
Artisan.belongsTo(Specialty, { foreignKey: 'specialty_id' });

const db = {
    sequelize,
    Category,
    Specialty,
    Artisan
};

module.exports = db;