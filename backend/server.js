const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/database');
const categoryRoutes = require('./routes/categoryRoutes');
const artisanRoutes = require('./routes/artisanRoutes');

const app = express();

app.use(cors()); 

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api/artisans', artisanRoutes);
app.use('/api/categories', categoryRoutes);

sequelize.sync({ alter: true })
  .then(() => console.log("Les tables ont été créées avec succès sur Aiven !"))
  .catch(err => console.error("Erreur de création :", err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur prêt sur http://localhost:${PORT}`);
});