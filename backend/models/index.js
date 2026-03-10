const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');

// Import des modèles
const Category = require('./Category');
const Artisan = require('./Artisan');

// Définition des relations 
Category.hasMany(Artisan, { foreignKey: 'category_id' });
Artisan.belongsTo(Category, { foreignKey: 'category_id' });

const db = {};
db.sequelize = sequelize;
db.Category = Category;
db.Artisan = Artisan;

module.exports = db;