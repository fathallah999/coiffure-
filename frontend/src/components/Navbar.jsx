import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'ar' : 'fr');
  };

  const menuItems = {
    fr: ['Accueil', 'Services', 'À propos', 'Contact'],
    ar: ['الرئيسية', 'الخدمات', 'حولنا', 'اتصل بنا']
  };

  const links = ['/', '/services', '/about', '/contact'];

  return (
    <nav className="luxury-bg text-off-white p-4 shadow-luxury">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          <span className="text-xl font-bold gold-text">Coiffure de Luxe & Massage</span>
        </Link>
        <div className="flex items-center space-x-6">
          {menuItems[language].map((item, index) => (
            <Link key={index} to={links[index]} className="hover:gold-text transition-colors duration-300">
              {item}
            </Link>
          ))}
          <button
            onClick={toggleLanguage}
            className="gold-border border px-3 py-1 rounded hover:bg-gold hover:text-deep-black transition-colors duration-300"
          >
            {language === 'fr' ? 'العربية' : 'Français'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;