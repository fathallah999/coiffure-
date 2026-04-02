import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      address: 'Bouskoura, Maroc',
      phone: '0621294967',
      social: 'Réseaux sociaux'
    },
    ar: {
      address: 'بوسكورة، المغرب',
      phone: '0621294967',
      social: 'وسائل التواصل الاجتماعي'
    }
  };

  return (
    <footer className="luxury-bg text-off-white p-8 mt-16">
      <div className="container mx-auto text-center">
        <p className="mb-2">{content[language].address}</p>
        <p className="mb-2">
          <a href="tel:0621294967" className="gold-text hover:underline">
            {content[language].phone}
          </a>
        </p>
        <p>{content[language].social}</p>
        <div className="mt-4 flex justify-center space-x-4">
          {/* Placeholder for social icons */}
          <span>FB</span>
          <span>IG</span>
          <span>WA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;