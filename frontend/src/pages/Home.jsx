import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const Home = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    fr: {
      title: 'Votre beauté, notre expertise à domicile',
      button: 'Réserver maintenant'
    },
    ar: {
      title: 'جمالك في أيدٍ خبيرة في منزلك',
      button: 'احجز الآن'
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center text-off-white" style={{
      background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://via.placeholder.com/1920x1080/000000/ffffff?text=Luxe+Background')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 gold-text animate-fade-in">
          {content[language].title}
        </h1>
        <Link
          to="/contact"
          className="inline-block gold-border border-2 px-8 py-3 rounded-lg hover:bg-gold hover:text-deep-black transition-all duration-300 shadow-luxury"
        >
          {content[language].button}
        </Link>
      </div>
    </div>
  );
};

export default Home;