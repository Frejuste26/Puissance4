=====================================
# Puissance 4
=====================================

## Description

Le jeu **Puissance 4** est un jeu de stratégie dans lequel deux joueurs (ou un joueur contre l'ordinateur) essaient d'aligner quatre jetons de leur couleur dans une grille de 7x6. Le premier joueur à réussir à aligner quatre jetons horizontalement, verticalement ou en diagonale gagne la partie.

Le jeu propose un mode contre l'ordinateur avec une IA simple qui place des jetons de manière aléatoire. Un bouton **Réinitialiser** est disponible pour recommencer une partie après une victoire.

## Fonctionnalités

- 🎮 **Mode joueur contre l'ordinateur**.
- 🔄 **Tour de l'ordinateur** avec un délai simulé.
- 🚪 **Détection de la victoire** après chaque coup (aligner 4 jetons).
- 🧩 **Réinitialisation du jeu** via un bouton **Réinitialiser** après chaque partie.
- 🟥 **Jetons rouges** pour le joueur et **jaunes** pour l'ordinateur.

## Instructions d'utilisation

1. Ouvrez le fichier `index.html` dans votre navigateur.
2. Cliquez sur la grille pour insérer un jeton.
3. L'ordinateur jouera après chaque tour du joueur.
4. Si un joueur aligne 4 jetons, une alerte apparaîtra pour annoncer le gagnant.
5. Cliquez sur **Réinitialiser** pour recommencer une nouvelle partie.

## Structure du projet

---

## Explication du code

- **HTML** (`index.html`) :
  - Structure de base du jeu avec une grille pour placer les jetons et un bouton **Réinitialiser**.
  
- **CSS** (`style.css`) :
  - Mise en forme du jeu (grille, jetons et bouton).

- **JavaScript** (`script.js`) :
  - **Création de la grille** de jeu (7x6).
  - **Gestion des clics** pour placer un jeton du joueur et de l'ordinateur.
  - **Vérification des victoires** : aligner 4 jetons dans n'importe quelle direction (horizontal, vertical, diagonale).
  - **Mouvement de l'IA** : L'ordinateur joue après chaque tour du joueur.
  - **Réinitialisation** du jeu avec le bouton **Réinitialiser**.

### Fonctionnalités principales en JavaScript :

1. **Génération de la grille** : Création dynamique d'une grille de jeu de 7x6.
2. **Détection des victoires** : Vérifie après chaque coup si un joueur a aligné 4 jetons.
3. **IA simple** : L'ordinateur sélectionne aléatoirement une colonne pour jouer.
4. **Réinitialisation** : Le bouton **Réinitialiser** permet de recommencer une nouvelle partie.

## Technologies utilisées

- **HTML5** pour la structure du jeu.
- **CSS3** pour le style et la présentation.
- **JavaScript** pour la logique du jeu et le contrôle des victours.

## Prérequis

Aucun prérequis particulier. Un navigateur moderne suffit pour jouer au jeu.

## Comment lancer le jeu

1. Téléchargez le projet.
2. Ouvrez le fichier `index.html` dans votre navigateur.
3. Jouez contre l'ordinateur et essayez d'aligner 4 jetons avant lui.

## Améliorations futures possibles

- Ajouter une **IA plus intelligente** avec des algorithmes de stratégie comme Minimax.
- Ajouter un **compteur de score** pour suivre les victoires des joueurs.
- Créer un **mode multijoueur en ligne**.
- Implémenter un **minuteur** pour limiter le temps de chaque joueur.
"""

## Auteur 
**[Kei Prince Frejuste]**
**[ keifrejuste26@gmail.com ]**
**[[Votre lien GitHub](https://github.com/Frejuste26)]** 
