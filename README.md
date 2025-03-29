# Test de Pureté - Projet Web

Ce projet est un site web interactif permettant de réaliser un test de pureté avec un système de notation et une interface en mode sombre.

## 📌 Fonctionnalités
- Test avec réponses en Oui/Non ou une échelle de 0 à 5
- Calcul du score de pureté
- Barre de progression dynamique
- Interface moderne en mode sombre
- Ajout facile de nouvelles questions via `questions.json`

## 🚀 Lancer le projet en local

### 1️⃣ Prérequis
- **Python** (version 3 recommandée)

### 2️⃣ Démarrer le serveur local (port 800)

1. **Ouvrir un terminal** (CMD, PowerShell ou Terminal)
2. **Aller dans le dossier du projet** :
   ```sh
   cd chemin/vers/le/dossier
   ```
3. **Lancer le serveur avec Python** :
   ```sh
   python -m http.server 800
   ```

### 3️⃣ Accéder au site
Ouvre un navigateur et va sur :

🔗 **[http://localhost:800](http://localhost:800)**

## 🛠 Modifier les questions
Les questions sont stockées dans `questions.json`. Pour en ajouter, édite ce fichier et ajoute de nouvelles entrées sous ce format :

```json
[
    { "question": "As-tu déjà menti ?", "type": "choix", "options": ["Oui", "Non"] },
    { "question": "Sur une échelle de 0 à 5, à quel point es-tu honnête ?", "type": "note", "options": [0, 1, 2, 3, 4, 5] }
]
```

## 📄 Licence
Ce projet est sous licence **MIT**.  
Tu peux l'utiliser, le modifier et le distribuer librement.  

---
### 📜 Licence MIT

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
