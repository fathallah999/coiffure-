import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';

export const LanguageContext = createContext();

function App() {
  const [language, setLanguage] = useState('fr'); // 'fr' or 'ar'

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;