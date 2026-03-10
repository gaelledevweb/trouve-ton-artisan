const express = require('express');
const router = express.Router();
const artisanController = require('../controllers/artisanController');

// Route
router.get('/search', artisanController.searchArtisans);
router.get('/top', artisanController.getTopArtisans);

module.exports = router;