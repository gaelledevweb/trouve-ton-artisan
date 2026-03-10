const { Op } = require('sequelize');
const Artisan = require('../models/Artisan');


// Top 3 artisans
exports.getTopArtisans = async (req, res) => {
    try {
        const topArtisans = await Artisan.findAll({
            where: { is_top_artisan: true },
            limit: 3
        });

        res.status(200).json(topArtisans);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des artisans du mois",
            error: error.message
        });
    }
};


// Barre de recherche artisans
exports.searchArtisans = async (req, res) => {
    try {
        const query = req.query.q;
        
        if (!query) {
            return res.status(400).json({ message: "Le terme de recherche est requis." });
        }

        const artisans = await Artisan.findAll({
            where: {
                name: {
                    [Op.like]: `%${query}%` 
                }
            }
        });

        res.status(200).json(artisans);
    } catch (error) {
        res.status(500).json({ 
            message: "Erreur lors de la recherche",
            error: error.message 
        });
    }
};