// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Importation des pages (y compris la nouvelle page de devis)
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import QuoteRequestPage from './pages/QuoteRequestPage'; // Renommage pour plus de clarté
import ServicesPage from './pages/ServicesPage';
import WorkshopPage from './pages/WorkshopPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* 🏠 Route principale */}
                <Route path="/" element={<HomePage />} />
                
                {/* 📞 Route Contact */}
                <Route path="/contact" element={<ContactPage />} />
                
                {/* 🛠️ Route Services */}
                <Route path="/services" element={<ServicesPage />} /> 
                
                {/* 🏭 Route Atelier */}
                <Route path="/workshop" element={<WorkshopPage />} />
                
                {/* 📸 Route Portfolio */}
                <Route path="/portfolio" element={<PortfolioPage />} />
                
                {/* 📝 NOUVELLE ROUTE : Demande de Devis */}
                <Route path="/devis" element={<QuoteRequestPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;