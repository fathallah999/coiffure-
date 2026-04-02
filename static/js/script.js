// Language data
const content = {
    fr: {
        nav: ['Accueil', 'Services', 'À propos', 'Contact'],
        heroTitle: 'Votre beauté, notre expertise à domicile',
        reserveBtn: 'Réserver maintenant',
        servicesTitle: 'Nos Services',
        service1Title: 'Coiffure à domicile',
        service1Desc: 'Service professionnel de coiffure directement chez vous.',
        service2Title: 'Massage relaxant',
        service2Desc: 'Massages thérapeutiques pour votre bien-être.',
        aboutTitle: 'À propos de nous',
        aboutText: 'Mohamed Fathallah, propriétaire de Coiffure de Luxe & Massage, offre des services premium de coiffure et de massage à domicile à Bouskoura, Maroc. Notre expertise garantit une expérience de beauté exceptionnelle dans le confort de votre foyer.',
        contactTitle: 'Contactez-nous',
        namePlaceholder: 'Nom',
        phonePlaceholder: 'Téléphone',
        messagePlaceholder: 'Message',
        submitBtn: 'Envoyer',
        whatsappText: 'Contacter via WhatsApp',
        footerAddress: 'Bouskoura, Maroc',
        footerSocial: 'Réseaux sociaux'
    },
    ar: {
        nav: ['الرئيسية', 'الخدمات', 'حولنا', 'اتصل بنا'],
        heroTitle: 'جمالك في أيدٍ خبيرة في منزلك',
        reserveBtn: 'احجز الآن',
        servicesTitle: 'خدماتنا',
        service1Title: 'تصفيف الشعر في المنزل',
        service1Desc: 'خدمة تصفيف شعر احترافية مباشرة في منزلك.',
        service2Title: 'تدليك مريح',
        service2Desc: 'تدليك علاجي لرفاهيتك.',
        aboutTitle: 'حولنا',
        aboutText: 'محمد فتح الله، صاحب صالون تصفيف الشعر الفاخر والتدليك، يقدم خدمات تصفيف الشعر والتدليك الفاخرة في المنزل في بوسكورة، المغرب. خبرتنا تضمن تجربة جمال استثنائية في راحة منزلك.',
        contactTitle: 'اتصل بنا',
        namePlaceholder: 'الاسم',
        phonePlaceholder: 'الهاتف',
        messagePlaceholder: 'الرسالة',
        submitBtn: 'إرسال',
        whatsappText: 'التواصل عبر واتساب',
        footerAddress: 'بوسكورة، المغرب',
        footerSocial: 'وسائل التواصل الاجتماعي'
    }
};

let currentLang = 'fr';

// Function to show page
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    window.scrollTo(0, 0);
}

// Function to toggle language
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    updateContent();
    updateDirection();
    updateLangButton();
}

// Function to update content
function updateContent() {
    const lang = content[currentLang];

    // Navbar
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach((link, index) => {
        link.textContent = lang.nav[index];
    });

    // Hero
    document.getElementById('hero-title').textContent = lang.heroTitle;

    // Services
    document.getElementById('services-title').textContent = lang.servicesTitle;
    document.getElementById('service1-title').textContent = lang.service1Title;
    document.getElementById('service1-desc').textContent = lang.service1Desc;
    document.getElementById('service2-title').textContent = lang.service2Title;
    document.getElementById('service2-desc').textContent = lang.service2Desc;

    // About
    document.getElementById('about-title').textContent = lang.aboutTitle;
    document.getElementById('about-text').textContent = lang.aboutText;

    // Contact
    document.getElementById('contact-title').textContent = lang.contactTitle;
    document.getElementById('name').placeholder = lang.namePlaceholder;
    document.getElementById('phone').placeholder = lang.phonePlaceholder;
    document.getElementById('message').placeholder = lang.messagePlaceholder;
    document.querySelector('#contact-form button').textContent = lang.submitBtn;
    document.querySelector('.whatsapp-link').textContent = lang.whatsappText;

    // Footer
    document.getElementById('footer-address').textContent = lang.footerAddress;
    document.getElementById('footer-social').textContent = lang.footerSocial;
}

// Function to update direction
function updateDirection() {
    const html = document.documentElement;
    if (currentLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.classList.add('rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.classList.remove('rtl');
        html.setAttribute('lang', 'fr');
    }
}

// Function to update language button
function updateLangButton() {
    const btn = document.getElementById('lang-toggle');
    btn.textContent = currentLang === 'fr' ? 'العربية' : 'Français';
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Simple alert for demo (in real app, send to server)
    alert(currentLang === 'fr' ? 'Message envoyé!' : 'تم إرسال الرسالة!');

    // Clear form
    document.getElementById('contact-form').reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    updateContent();
    updateDirection();
    updateLangButton();
});