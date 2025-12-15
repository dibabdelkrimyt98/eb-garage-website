// src/App.jsx
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ServicesPage from './pages/ServicesPage';
import WorkshopPage from './pages/WorkshopPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* The main route */}
        <Route path="/" element={<HomePage />} />
        
        {/* The contact route */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} /> 
        <Route path="/workshop" element={<WorkshopPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />

        {/* Add other pages (Portfolio, Workshop) as needed */}
        {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        {/* <Route path="/workshop" element={<WorkshopPage />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;