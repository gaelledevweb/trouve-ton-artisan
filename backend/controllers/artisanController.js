const { Artisan, Specialty, Category } = require('../models');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');

// Fonction de recherche et filtrage par catégorie
exports.searchArtisans = async (req, res) => {
    try {
        const { q, category } = req.query;
        console.log("Paramètres reçus - Recherche:", q, "Catégorie:", category);

        let whereCondition = {};

        // Recherche par la barre de recherche
        if (q) {
            whereCondition[Op.or] = [
                { name: { [Op.like]: `%${q}%` } },
                { '$Specialty.name$': { [Op.like]: `%${q}%` } }
            ];
        }

        // Tri par catégorie via les liens du Header
        if (category) {
            whereCondition['$Specialty.Category.name$'] = category;
        }

        const artisans = await Artisan.findAll({
            where: whereCondition,
            include: [{
                model: Specialty,
                as: 'Specialty',
                include: [{
                    model: Category,
                    as: 'Category'
                }]
            }]
        });

        res.status(200).json(artisans);
    } catch (error) {
        console.error('Erreur SQL :', error);
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

// Récupérer tous les artisans
exports.getAllArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            include: [
                {
                    model: Specialty,
                    as: 'Specialty',
                    include: [{ model: Category, as: 'Category' }]
                }
            ]
        });
        res.status(200).json(artisans);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération", error: error.message });
    }
};

// Récupérer un artisan par son ID
exports.getArtisanById = async (req, res) => {
    try {
        const artisan = await Artisan.findByPk(req.params.id, {
            include: [
                {
                    model: Specialty,
                    as: 'Specialty',
                    include: [{ model: Category, as: 'Category' }]
                }
            ]
        });
        if (artisan) {
            res.status(200).json(artisan);
        } else {
            res.status(404).json({ message: "Artisan non trouvé" });
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur", error: error.message });
    }
};

// Récupérer les "Top Artisans" 
exports.getTopArtisans = async (req, res) => {
    try {
        const artisans = await Artisan.findAll({
            where: { is_top_artisan: true },
            include: [
                {
                    model: Specialty,
                    as: 'Specialty',
                    include: [{ model: Category, as: 'Category' }]
                }
            ]
        });
        res.status(200).json(artisans);
    } catch (error) {
        res.status(500).json({ message: "Erreur", error: error.message });
    }
};

// Envoi d'email via le formulaire de contact
exports.contactArtisan = async (req, res) => {
    const { artisanId, name, subject, email, message } = req.body;

    try {
        const artisan = await Artisan.findByPk(artisanId);

        if (!artisan || !artisan.email) {
            return res.status(404).json({ error: "Artisan ou email introuvable." });
        }

        const transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            replyTo: email,
            to: artisan.email,
            subject: `[Trouve Ton Artisan] ${subject}`,
            text: `Message de : ${name} (${email})\n\n${message}`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Votre message a bien été envoyé !" });

    } catch (error) {
        console.error("Erreur envoi mail :", error);
        res.status(500).json({ error: "Erreur lors de l'envoi de l'email." });
    }
};