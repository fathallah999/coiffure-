import { useContext } from 'react';
import { LanguageContext } from '../App';

const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: 'À propos de nous',
      text: 'Mohamed Fathallah, propriétaire de Coiffure de Luxe & Massage, offre des services premium de coiffure et de massage à domicile à Bouskoura, Maroc. Notre expertise garantit une expérience de beauté exceptionnelle dans le confort de votre foyer.'
    },
    ar: {
      title: 'حولنا',
      text: 'محمد فتح الله، صاحب صالون تصفيف الشعر الفاخر والتدليك، يقدم خدمات تصفيف الشعر والتدليك الفاخرة في المنزل في بوسكورة، المغرب. خبرتنا تضمن تجربة جمال استثنائية في راحة منزلك.'
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12 gold-text">
        {content[language].title}
      </h1>
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          {content[language].text}
        </p>
      </div>
    </div>
  );
};

export default About;