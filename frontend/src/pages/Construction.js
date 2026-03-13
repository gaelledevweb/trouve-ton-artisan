import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

const Construction = () => {
    const { categoryName } = useParams();
    const [artisans, setArtisans] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/artisans?category=${categoryName}`)
            .then(res => setArtisans(res.data))
            .catch(err => console.error(err));
    }, [categoryName]);

    return (
        <div className="container py-4">
            <h2 className="mb-4">Artisans : {categoryName}</h2>
            <div className="row">
                {artisans.length > 0 ? (
                    artisans.map(artisan => <ArtisanCard key={artisan.id} artisan={artisan} />)
                ) : (
                    <p>Aucun artisan trouvé dans cette catégorie.</p>
                )}
            </div>
        </div>
    );
};

export default Construction;