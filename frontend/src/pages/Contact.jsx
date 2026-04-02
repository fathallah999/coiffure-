import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';

const Contact = () => {
  const { language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send to backend
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        alert(language === 'fr' ? 'Message envoyé!' : 'تم إرسال الرسالة!');
        setFormData({ name: '', phone: '', message: '' });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const content = {
    fr: {
      title: 'Contactez-nous',
      name: 'Nom',
      phone: 'Téléphone',
      message: 'Message',
      submit: 'Envoyer',
      whatsapp: 'Contacter via WhatsApp'
    },
    ar: {
      title: 'اتصل بنا',
      name: 'الاسم',
      phone: 'الهاتف',
      message: 'الرسالة',
      submit: 'إرسال',
      whatsapp: 'التواصل عبر واتساب'
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 gold-text">
        {content[language].title}
      </h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={content[language].name}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={content[language].phone}
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            required
          />
          <textarea
            name="message"
            placeholder={content[language].message}
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full gold-bg text-deep-black py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
          >
            {content[language].submit}
          </button>
        </form>
        <a
          href="https://wa.me/212621294967?text=Bonjour%20je%20souhaite%20réserver"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-center gold-text hover:underline"
        >
          {content[language].whatsapp}
        </a>
      </div>
    </div>
  );
};

export default Contact;