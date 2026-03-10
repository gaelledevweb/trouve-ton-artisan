const Category = require('../models/Category');

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({
            message: "Erreur lors de la récupération des catégories",
            error: error.message
        });
    }
};