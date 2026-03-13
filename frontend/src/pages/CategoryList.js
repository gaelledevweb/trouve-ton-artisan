import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

const CategoryList = () => {
    const { categoryName } = useParams();
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/api/artisans/search?category=${categoryName}`)
            .then(res => {
                setArtisans(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération", err);
                setLoading(false);
            });
    }, [categoryName]);

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-5" style={{ color: '#004a99' }}>
                Artisans : {categoryName}
            </h2>

            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status"></div>
                </div>
            ) : (
                <div className="row g-4">
                    {artisans.length > 0 ? (
                        artisans.map(artisan => (
                            <ArtisanCard key={artisan.id} artisan={artisan} />
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted fs-5">Aucun artisan trouvé pour "{categoryName}".</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CategoryList;