import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import ArtisanCard from '../components/ArtisanCard';

const SearchResults = () => {
    const [artisans, setArtisans] = useState([]);
    const [loading, setLoading] = useState(true);
    const { search } = useLocation();

    const params = new URLSearchParams(search);
    const category = params.get('category');

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5000/api/artisans/search${search}`)
            .then(res => {
                setArtisans(res.data);
                setLoading(false);
            })
            .catch(err => { console.error(err); setLoading(false); });
    }, [search]);

    if (loading) return <div className="text-center py-5">Chargement...</div>;

    return (
        <div id="search-page">
            <div className="container-fluid">
                <h2 className="category-title">
                    {category ? `Artisans : ${category}` : "Résultats"}
                </h2>

                <div className="artisan-grid">
                    {artisans.map(artisan => (
                        <ArtisanCard key={artisan.id} artisan={artisan} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchResults;