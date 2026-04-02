import React, { useContext } from 'react';
import { LanguageContext } from '../App';

const Services = () => {
  const { language } = useContext(LanguageContext);

  const services = {
    fr: [
      {
        title: 'Coiffure à domicile',
        description: 'Service professionnel de coiffure directement chez vous.'
      },
      {
        title: 'Massage relaxant',
        description: 'Massages thérapeutiques pour votre bien-être.'
      }
    ],
    ar: [
      {
        title: 'تصفيف الشعر في المنزل',
        description: 'خدمة تصفيف شعر احترافية مباشرة في منزلك.'
      },
      {
        title: 'تدليك مريح',
        description: 'تدليك علاجي لرفاهيتك.'
      }
    ]
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 gold-text">
        {language === 'fr' ? 'Nos Services' : 'خدماتنا'}
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {services[language].map((service, index) => (
          <div key={index} className="luxury-bg text-off-white p-6 rounded-lg shadow-luxury hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-4 gold-text">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;