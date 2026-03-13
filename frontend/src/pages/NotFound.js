import React from 'react';
import { Link } from 'react-router-dom';
import img404 from '../assets/erreur404.jpg';

const NotFound = () => {
    return (
        <div className="container text-center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <img 
                src={img404} 
                alt="Artisan soulevant une page non trouvée" 
                className="img-fluid mb-5" 
                style={{ maxWidth: '400px' }} 
            />
            <h2 className="mb-4">Oups ! La page que vous cherchez n'existe pas.</h2>
            <p className="lead mb-5">
                Il semble que l'artisan ou la page que vous essayez de joindre soit introuvable.
            </p>
            <Link to="/" className="btn btn-primary px-5 py-3 rounded-pill" style={{ backgroundColor: '#0074c7', border: 'none' }}>
                Retourner à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;