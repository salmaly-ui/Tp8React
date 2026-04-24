# 📘 README - Application React de Consommation d'API

## 📋 Description du projet

Application web développée avec **React** qui démontre l'utilisation de deux méthodes pour consommer des APIs REST :
- **fetch()** : Méthode native JavaScript
- **axios** : Bibliothèque externe populaire

L'application affiche une galerie de photos et une section de commentaires récupérés depuis des APIs publiques.

---

## 🎯 Objectifs pédagogiques

- ✅ Comprendre la différence entre `fetch()` et `axios`
- ✅ Charger des données depuis une API REST
- ✅ Afficher des listes dynamiques dans React
- ✅ Gérer les états de chargement et d'erreur
- ✅ Structurer proprement un projet React
- ✅ Appliquer du CSS moderne avec animations

---

## 🚀 Technologies utilisées

| Technologie | Version | Description |
|-------------|---------|-------------|
| React | 18.x | Framework JavaScript |
| Axios | 1.x | Client HTTP |
| CSS3 | - | Stylisation avancée |
| Picsum Photos API | - | API de photos aléatoires |
| JSONPlaceholder | - | API de test pour commentaires |

---
## Demoinstration video


https://github.com/user-attachments/assets/8fede9e0-751d-4506-8bfc-0edbd4395a6e


---
## 📁 Structure du projet

```
gallery-api-app/
│
├── public/
│   └── index.html                 # Page HTML principale
│
├── src/
│   ├── App.js                     # Composant principal
│   ├── App.css                    # Styles de l'application
│   ├── PhotosGallery.js           # Composant galerie (fetch)
│   ├── CommentsSection.js         # Composant commentaires (axios)
│   ├── index.js                   # Point d'entrée React
│   └── index.css                  # Styles globaux
│
├── package.json                   # Dépendances du projet
└── README.md                      # Documentation
```

---

## ⚙️ Installation et démarrage

### Prérequis

- **Node.js** version 14 ou supérieure
- **npm** ou **yarn**

### Étapes d'installation

**1. Créer le projet React**

```bash
npx create-react-app gallery-api-app
cd gallery-api-app
```

**2. Installer les dépendances**

```bash
npm install axios
```

**3. Copier les fichiers sources**

Remplacer les fichiers dans `src/` par ceux fournis dans le projet.

**4. Lancer l'application**

```bash
npm start
```

L'application s'ouvre automatiquement sur **http://localhost:3000**

---

## 🔍 Fonctionnalités principales

### 🖼️ Galerie de photos (fetch)

- Chargement de 9 photos depuis l'API Picsum
- Affichage en grille responsive
- Effet hover avec animation
- Gestion des erreurs de chargement d'images
- Lazy loading pour optimiser les performances

**Code clé :**
```javascript
fetch('https://picsum.photos/600/400?random=1')
  .then(res => res.json())
  .then(data => setPhotos(data))
  .catch(err => setError(err.message));
```

### 💬 Section commentaires (axios)

- Récupération de 8 commentaires depuis JSONPlaceholder
- Affichage avec email et corps du commentaire
- Animation au survol
- Design carte moderne

**Code clé :**
```javascript
axios.get('https://jsonplaceholder.typicode.com/comments')
  .then(response => setComments(response.data))
  .catch(error => setError(error.message));
```

---

## 🎨 Fonctionnalités CSS

- **Design moderne** avec dégradés violets
- **Animations** :
  - Fade-in au chargement
  - Pulse pour le message de chargement
  - Hover sur les cartes
- **Responsive design** adaptatif
- **Grille CSS** pour la galerie
- **Variables CSS** pour cohérence des couleurs

---

## 📊 APIs utilisées

### Picsum Photos
- **URL** : `https://picsum.photos/`
- **Usage** : Génération de photos aléatoires
- **Avantages** : Gratuit, fiable, pas de clé API

### JSONPlaceholder
- **URL** : `https://jsonplaceholder.typicode.com/`
- **Usage** : Données de test (commentaires, utilisateurs, posts)
- **Avantages** : Parfait pour prototypage et apprentissage

---

## 🆚 Comparaison fetch vs axios

| Critère | fetch() | axios |
|---------|---------|-------|
| **Installation** | Natif (aucune) | `npm install axios` |
| **Parsing JSON** | Manuel `.json()` | Automatique |
| **Gestion erreurs HTTP** | Manuelle | Automatique |
| **Syntaxe** | Plus verbeuse | Plus concise |
| **Support ancien navigateur** | Non (IE11) | Oui (avec polyfill) |
| **Intercepteurs** | Non | Oui |
| **Timeout** | Non natif | Oui |

---

## 🏋️ Exercices d'amélioration

### Niveau Débutant
1. Changer le nombre de photos affichées (12 au lieu de 9)
2. Ajouter le nom de l'auteur dans les commentaires
3. Modifier les couleurs du thème

### Niveau Intermédiaire
4. Ajouter un bouton "Charger plus" pour afficher davantage de photos
5. Créer un champ de recherche pour filtrer les commentaires
6. Ajouter une animation de skeleton loading

### Niveau Avancé
7. Implémenter la pagination pour les commentaires
8. Créer un système de favoris pour les photos (LocalStorage)
9. Ajouter un composant `TodoList` avec l'API `/todos`
10. Gérer le mode sombre/clair

---

## 🐛 Résolution des problèmes courants

### Les images ne s'affichent pas
**Solution** : Vérifier que l'URL Picsum est accessible
```javascript
onError={(e) => {
  e.target.src = 'https://via.placeholder.com/600x400';
}}
```

### Erreur "Module not found"
**Solution** : Vérifier que tous les imports sont corrects
```bash
npm install
```

### L'application ne démarre pas
**Solution** : Supprimer `node_modules` et réinstaller
```bash
rm -rf node_modules package-lock.json
npm install
npm start
```

### Port 3000 déjà utilisé
**Solution** : Utiliser un autre port
```bash
PORT=3001 npm start
```

---

## 📚 Concepts React abordés

- **Hooks** :
  - `useState` : Gestion d'état local
  - `useEffect` : Effets de bord et appels API
- **Props** : Passage de données entre composants
- **Conditional Rendering** : Affichage conditionnel
- **List & Keys** : Rendu de listes avec `.map()`
- **Event Handling** : Gestion des erreurs d'images

---

## 🔐 Bonnes pratiques appliquées

✅ Séparation des composants (SRP - Single Responsibility Principle)  
✅ Gestion des états de chargement et d'erreur  
✅ Nettoyage du code (pas de code inutilisé)  
✅ Nommage explicite des variables  
✅ Commentaires pertinents  
✅ CSS organisé et réutilisable  
✅ Responsive design  

---

## 📈 Améliorations futures possibles

- [ ] Ajouter TypeScript pour le typage
- [ ] Implémenter Redux pour la gestion d'état globale
- [ ] Créer des tests unitaires avec Jest
- [ ] Ajouter un système de routing avec React Router
- [ ] Déployer sur Netlify ou Vercel
- [ ] Ajouter un mode hors-ligne avec Service Workers
- [ ] Implémenter l'authentification utilisateur

---

## 👨‍💻 Auteur
# Salma Laouy
**Développé dans le cadre du TP React - S6**  
Année universitaire : 2024-2025  
Matière : Développement Web Avancé

---

## 📝 Licence

Ce projet est à usage pédagogique uniquement.

---

## 📞 Support

En cas de problème :
1. Vérifier la console du navigateur (F12)
2. Lire les messages d'erreur dans le terminal
3. Consulter la documentation React : https://react.dev/

---

## 🎓 Ressources utiles

- [Documentation React officielle](https://react.dev/)
- [Documentation Axios](https://axios-http.com/)
- [MDN - Fetch API](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
- [CSS Tricks](https://css-tricks.com/)

---

