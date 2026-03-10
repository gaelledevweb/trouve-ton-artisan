const express = require('express');
const cors = require('cors');
require('dotenv').config();
const categoryRoutes = require('./routes/categoryRoutes');
const artisanRoutes = require('./routes/artisanRoutes');

// Importation de la connexion à la base de données
const db = require('./models/index');

const app = express();

// Sécurité

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    optionsSuccessStatus: 200
}));

// Middleware 
app.use(express.json());

// Routes
app.use('/api/artisans', artisanRoutes);
app.use('/api/categories', categoryRoutes);
app.get('/', (req, res) => {
    res.json({ message: "Bienvenue sur l'API de Trouve ton artisan !" });
});

// Serveur

const PORT = process.env.PORT || 5000;

db.sequelize.sync({ alter: true })
    .then(() => {
        console.log('Base de données synchronisée et tables créées.');
        app.listen(PORT, () => {
            console.log(`Serveur accessible sur http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('Erreur de synchronisation SQL :', err);
    });