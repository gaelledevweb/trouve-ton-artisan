const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

// 1. Les routes POST (Envoi de données)
router.post('/contact', artisanController.contactArtisan);

// 2. Les routes GET fixes
router.get('/top', artisanController.getTopArtisans);
router.get('/search', artisanController.searchArtisans);

// 3. La route GET globale
router.get('/', artisanController.getAllArtisans);

// 4. La route variable
router.get('/:id', artisanController.getArtisanById);

module.exports = router;