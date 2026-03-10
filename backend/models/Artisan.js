const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
    name: { type: DataTypes.STRING, allowNull: false }, 
    note: { type: DataTypes.DECIMAL(2, 1) },           
    location: { type: DataTypes.STRING },             
    about: { type: DataTypes.TEXT },                  
    email: { type: DataTypes.STRING },                  
    is_top_artisan: { type: DataTypes.BOOLEAN }         
}, {
    tableName: 'artisans',
    timestamps: false
});

module.exports = Artisan;