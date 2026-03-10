const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Route
router.post('/', contactController.sendEmailToArtisan);

module.exports = router;