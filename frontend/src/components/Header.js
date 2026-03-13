import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';

const Header = () => {
    // Liste des catégories 
    const categories = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // Gestion de la recherche textuelle
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${searchTerm}`); 
            setSearchTerm('');
        }
    };

    return (
        <header className="shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="Trouve ton artisan" style={{ height: "80px" }} />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            {categories.map((cat) => (
                                <li className="nav-item" key={cat}>
                                    <Link 
                                        className="nav-link text-dark fw-medium px-3" 
                                        to={`/search?category=${cat}`}
                                        style={{ fontSize: '1.1rem' }}
                                    >
                                        {cat}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <form className="d-flex position-relative" onSubmit={handleSearch} style={{ width: '250px' }}>
                            <input
                                className="form-control rounded-pill ps-4"
                                type="search"
                                placeholder="Rechercher..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{ borderColor: '#0082c3', borderSize: '2px' }}
                            />
                            <button 
                                className="btn position-absolute end-0 top-50 translate-middle-y border-0 bg-transparent" 
                                type="submit"
                                style={{ color: '#0082c3', paddingRight: '15px' }}
                            >
                                🔍
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div style={{ height: '5px', backgroundColor: '#0082c3' }}></div>
        </header>
    );
};

export default Header;