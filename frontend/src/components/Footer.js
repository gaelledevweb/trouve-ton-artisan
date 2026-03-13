import React from 'react';
import { Link } from 'react-router-dom';
import logoRegion from '../assets/Logo2.png';

const Footer = () => {
    return (
        <footer className="mt-auto" style={{ backgroundColor: '#0082c3', color: 'white' }}>
            <div style={{ backgroundColor: 'white', height: '30px', borderRadius: '0 0 50% 50% / 0 0 100% 100%' }}></div>

            <div className="container py-5">
                <div className="row g-4 text-center justify-content-center align-items-center">
                    <div className="col-12 col-md-5 d-flex justify-content-center">
                        <div 
                            style={{
                                width: '130px',
                                height: '130px',
                                backgroundColor: 'white', 
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '5px' 
                            }}
                        >
                            <div 
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#0082c3', 
                                    borderRadius: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '15px'
                                }}
                            >
                                <img 
                                    src={logoRegion} 
                                    alt="Région Auvergne-Rhône-Alpes" 
                                    style={{ 
                                        maxHeight: '100%', 
                                        maxWidth: '100%', 
                                        filter: 'brightness(0) invert(1)' 
                                    }} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="d-none d-md-block col-md-1" style={{ borderLeft: '1px solid rgba(255,255,255,0.3)', height: '100px' }}></div>

                    <div className="col-12 col-md-5">
                        <h6 className="fw-bold text-uppercase mb-3">Antenne de Lyon</h6>
                        <address className="fst-normal small mb-0">
                            101 cours Charlemagne<br />
                            CS 20033<br />
                            69269 LYON CEDEX 02<br />
                            France<br />
                            <div className="mt-2">
                                <strong>Tél :</strong> +33 (0)4 26 73 40 00
                            </div>
                        </address>
                    </div>
                </div>

                <hr className="my-4" style={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />

                <div className="d-flex flex-wrap justify-content-center gap-3 small text-center pb-3">
                    <Link to="/mentions-legales" className="text-white text-decoration-none border-end pe-3">Mentions légales</Link>
                    <Link to="/donnees-personnelles" className="text-white text-decoration-none border-end pe-3">Données personnelles</Link>
                    <Link to="/accessibilite" className="text-white text-decoration-none border-end pe-3">Accessibilité</Link>
                    <Link to="/cookies" className="text-white text-decoration-none">Gestion des cookies</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;