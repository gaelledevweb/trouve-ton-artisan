import React from 'react';
import { Link } from 'react-router-dom';

const ArtisanCard = ({ artisan }) => {
    const renderStars = (note) => {
        const stars = [];
        const fullStars = Math.floor(note);
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} style={{ color: i <= fullStars ? '#ffc107' : '#e4e5e9' }}>★</span>
            );
        }
        return stars;
    };

    const getArtisanImage = (id) => {
        try {
            return require(`../assets/artisans/${id}.jpg`);
        } catch (err) {
            return 'https://via.placeholder.com/300x200?text=Image+Indisponible';
        }
    };

    return (
        <div className="artisan-card">
            <Link to={`/artisan/${artisan.id}`} className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm text-center overflow-hidden">
                    <img 
                        src={getArtisanImage(artisan.id)} 
                        alt={artisan.name} 
                        style={{ height: '200px', objectFit: 'cover' }}
                        className="card-img-top"
                    />
                    
                    <div className="card-body p-3">
                        <h5 className="card-title fw-bold text-dark">{artisan.name}</h5>
                        <div className="mb-2">
                            {renderStars(artisan.note)}
                            <small className="ms-2 text-muted">({artisan.note}/5)</small>
                        </div>
                        <p className="card-text text-secondary small">
                            <strong>Spécialité :</strong> {artisan.specialty?.name || "Artisan"}<br/>
                            <strong>Localisation :</strong> {artisan.location}
                        </p>

                        <div className="btn btn-primary rounded-pill px-4 mt-2" style={{ backgroundColor: '#0082c3', border: 'none' }}>
                            Voir le profil
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ArtisanCard;