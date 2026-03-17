const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT || 22338, // Ajout du port Aiven
        dialect: 'mysql',
        logging: false,
        define: {
            timestamps: false
        },
        // AJOUT INDISPENSABLE POUR AIVEN :
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
);

module.exports = sequelize;