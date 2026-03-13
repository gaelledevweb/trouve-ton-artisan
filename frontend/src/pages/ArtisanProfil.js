import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArtisanDetail = () => {
    const { id } = useParams();
    const [artisan, setArtisan] = useState(null);
    const [showForm, setShowForm] = useState(false);
    
    // États pour le formulaire et les messages de retour
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });

    useEffect(() => {
        fetch(`http://localhost:5000/api/artisans/${id}`)
            .then(res => res.json())
            .then(data => setArtisan(data))
            .catch(err => console.error(err));
    }, [id]);

    // Gestion des changements dans les champs du formulaire
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Envoi du formulaire via FETCH
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setStatus({ type: 'info', msg: 'Envoi en cours...' });

        try {
            const response = await fetch('http://localhost:5000/api/artisans/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    artisanId: id 
                })
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', msg: 'Votre message a bien été envoyé !' });
                setFormData({ name: '', email: '', subject: '', message: '' }); 
                setTimeout(() => setShowForm(false), 3000); 
            } else {
                setStatus({ type: 'danger', msg: result.error || 'Une erreur est survenue.' });
            }
        } catch (error) {
            setStatus({ type: 'danger', msg: 'Impossible de contacter le serveur.' });
        }
    };

    if (!artisan) return <div className="container mt-5">Chargement...</div>;

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="fw-bold">{artisan.name}</h1>
                    <div className="mb-3">
                        <span className="text-warning">
                            {"★".repeat(Math.floor(artisan.note))}
                            {"☆".repeat(5 - Math.floor(artisan.note))}
                        </span>
                        <span className="ms-2">({artisan.note}/5)</span>
                    </div>
                    <p><strong>Spécialité :</strong> {artisan.Specialty?.name || 'Artisan'}</p>
                    <p><strong>Ville :</strong> {artisan.location}</p>
                    
                    <h3 className="mt-4">À propos</h3>
                    <p>{artisan.about}</p>
                    
                    {artisan.website && (
                        <p><strong>Site web :</strong> <a href={artisan.website} target="_blank" rel="noreferrer">{artisan.website}</a></p>
                    )}

                    <button 
                        className="btn btn-primary mt-3 px-4 rounded-pill"
                        style={{ backgroundColor: '#0074c7', border: 'none' }}
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'Fermer le formulaire' : "Contacter l'artisan"}
                    </button>
                </div>

                <div className="col-md-6 text-center">
                    <img 
                        src={require(`../assets/artisans/${artisan.id}.jpg`)} 
                        alt={artisan.name} 
                        className="img-fluid rounded shadow-sm"
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Image+Indisponible'; }}
                    />
                </div>
            </div>

            {showForm && (
                <div className="row mt-5 justify-content-center">
                    <div className="col-md-8 card p-4 shadow-sm bg-light">
                        <h2 className="text-center mb-4">Demande de renseignements</h2>
                        
                        {status.msg && (
                            <div className={`alert alert-${status.type} text-center`}>
                                {status.msg}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label">Nom / Prénom</label>
                                    <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">Votre Email</label>
                                    <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Objet</label>
                                    <input type="text" name="subject" className="form-control" value={formData.subject} onChange={handleChange} required />
                                </div>
                                <div className="col-12">
                                    <label className="form-label">Message</label>
                                    <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn btn-primary">Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtisanDetail;