# Coiffure de Luxe & Massage

Application web professionnelle pour un service de coiffure à domicile.

## Structure du projet

```
projet coiffure/
├── frontend/          # React + Vite + TailwindCSS
├── backend/           # FastAPI (Python)
└── static/            # Version HTML/CSS/JS statique
```

## Versions disponibles

### 1. Version statique (HTML/CSS/JS)
Pour voir le site immédiatement sans installation :
- Ouvrez `static/index.html` dans votre navigateur web
- Fonctionnalités complètes : navigation, langues, formulaire (simulation)

### 2. Version React (avec backend)
Pour une version complète avec API :

#### Backend
```bash
cd backend
pip install -r requirements.txt
python main.py
```

#### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Fonctionnalités

- ✅ Design luxe (noir, doré, blanc cassé) avec animations
- ✅ Interface bilingue Français/Arabe avec switch langue dynamique
- ✅ RTL complet pour l'arabe
- ✅ Pages : Accueil, Services, À propos, Contact
- ✅ Formulaire de contact (simulation en statique, API en React)
- ✅ Bouton WhatsApp intégré
- ✅ Logo SVG simple et élégant
- ✅ Responsive design
- ✅ Code propre et commenté

## Technologies utilisées

- **Frontend React**: React, Vite, TailwindCSS, React Router
- **Backend**: FastAPI, Python
- **Statique**: HTML5, CSS3, JavaScript ES6
- **Base de données**: JSON file (messages.json)