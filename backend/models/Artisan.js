const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artisan = sequelize.define('Artisan', {
    name: { type: DataTypes.STRING, allowNull: false },
    specialty_id: { type: DataTypes.INTEGER },
    note: { type: DataTypes.DECIMAL(2, 1) },
    location: { type: DataTypes.STRING, allowNull: false },
    about: { type: DataTypes.TEXT },
    email: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING },
    image_url: { type: DataTypes.STRING },
    is_top_artisan: { type: DataTypes.BOOLEAN, defaultValue: false }
}, {
    tableName: 'artisans',
    timestamps: false
});

module.exports = Artisan;