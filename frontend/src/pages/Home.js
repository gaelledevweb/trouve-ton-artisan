import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

const Home = () => {
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/artisans/top')
            .then(res => setArtisans(res.data))
            .catch(err => console.error("Erreur tops artisans:", err));
    }, []);

    return (
        <div className="container py-5">
            <section className="mb-5">
                <h2 className="fw-bold mb-5" style={{ color: '#004a99' }}>Comment trouver mon artisan ?</h2>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                        <div className="d-flex align-items-center h-100">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" 
                                 style={{ width: '35px', height: '35px', fontWeight: 'bold' }}>1</div>
                            <div className="ms-3 small fw-bold">Choisir la catégorie d’artisanat dans le menu.</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center h-100">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" 
                                 style={{ width: '35px', height: '35px', fontWeight: 'bold' }}>2</div>
                            <div className="ms-3 small fw-bold">Choisir un artisan.</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center h-100">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" 
                                 style={{ width: '35px', height: '35px', fontWeight: 'bold' }}>3</div>
                            <div className="ms-3 small fw-bold">Le contacter via le formulaire de contact.</div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="d-flex align-items-center h-100">
                            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center flex-shrink-0" 
                                 style={{ width: '35px', height: '35px', fontWeight: 'bold' }}>4</div>
                            <div className="ms-3 small fw-bold">Une réponse sera apportée sous 48h.</div>
                        </div>
                    </div>
                </div>
            </section>

            <hr className="my-5 opacity-25" />

            <h2 className="text-center mb-5 fw-bold" style={{ color: '#004a99' }}>
                Artisans du mois
            </h2>
            <div className="row g-4 justify-content-center">
                {artisans.length > 0 ? (
                    artisans.map(artisan => (
                        <div className="col-12 col-md-4" key={artisan.id}>
                            <ArtisanCard artisan={artisan} />
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <p className="text-muted">Chargement des artisans...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;