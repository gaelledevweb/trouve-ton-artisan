import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtisansList from './pages/Construction';
import ArtisanProfil from './pages/ArtisanProfil';
import NotFound from './pages/NotFound';
import MentionsLegales from './pages/MentionsLegales';
import SearchResults from './pages/SearchResults';
import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<ArtisansList />} />
          <Route path="/artisan/:id" element={<ArtisanProfil />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/mentions-legales" element={<MentionsLegales title="Mentions Légales" />} />
          <Route path="/donnees-personnelles" element={<MentionsLegales title="Données Personnelles" />} />
          <Route path="/accessibilite" element={<MentionsLegales title="Accessibilité" />} />
          <Route path="/cookies" element={<MentionsLegales title="Gestion des cookies" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
