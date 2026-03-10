const nodemailer = require('nodemailer');

exports.sendEmailToArtisan = async (req, res) => {
    const { name, email, subject, message, artisanEmail } = req.body;
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires." });
    }

    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        let mailOptions = {
            from: email, 
            to: artisanEmail,
            subject: `Trouve ton artisan - ${subject}`,
            text: `Message de ${name} (${email}) : \n\n${message}`
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Votre message a été envoyé avec succès. Une réponse sera apportée sous 48h." });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'envoi de l'e-mail.", error: error.message });
    }
};