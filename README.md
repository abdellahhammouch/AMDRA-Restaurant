# AMDRA-Restaurant

**AMDRA** est une plateforme web interactive permettant aux clients de commander leurs plats en ligne de manière fluide et intuitive. Le projet vise à offrir une expérience utilisateur moderne, rapide et centrée sur le client.


## Contexte du projet

Le restaurant **AMDRA** souhaite lancer une application web offrant :  
- Une navigation dynamique et intuitive  
- La personnalisation des plats (taille, quantité, options)  
- Un panier intelligent avec total dynamique  
- L’intégration d’API pour récupérer les menus en temps réel  

L’objectif est de créer une interface réactive et centrée sur l’expérience utilisateur.

## User Stories

- Découvrir les plats du jour et les promotions  
- Parcourir le menu et rechercher facilement un plat  
- Filtrer les plats par catégorie  
- Consulter les détails d’un plat et le personnaliser  
- Ajouter, modifier ou supprimer des plats de son panier  
- Renseigner ses informations personnelles et confirmer sa commande  
- Télécharger le pdf de commande  
- Contacter le restaurant et consulter la FAQ  

# Technologies utilisées

  -  HTML5 – structure du site
  -  CSS, TailwindCSS – design responsive et moderne
  -  JavaScript ES6 – interactions, logique métier, manipulation DOM
  -  localStorage – conservation des préférences et du panier
  -  Fetch - récupérer les données depuis un fichier JSON et gestion des exceptions avec .then() et .catch()
  -  JSON – simulation de base de données
  -  Figma – création des prototypes et animations et maquettes
  -  Jira– planification et suivi des tâches  
  -  Git & GitHub– versionning du code et gestion du projet

## Rôles & Missions

### Conception & Design
- Création de maquettes modernes et ergonomiques via **Figma**  
- Intégration d’un carrousel interactif pour les plats du jour et offres spéciales  

### Développement
- Carrousel dynamique pour les plats populaires  
- Galerie du menu : affichage des plats sous forme de cartes interactives (images, prix, ingrédients)  
- Barre de réseaux sociaux dans page Accueil et Page À propos / Contact
- Validation REGEX : contrôle des champs (nom, email, téléphone, adresse)  
- Filtre et recherche : filtrage des plats par catégorie et mot-clé  
- Personnalisation : choix de la taille et de la quantité  
- Panier interactif : ajout, modification et suppression avec mise à jour automatique du total  
- Fichier PDF : génération téléchargeable  
- Local Storage : conservation du panier et des préférences utilisateur  
- Consommation d’API : récupération des plats depuis un fichier JSON 
- Pagination fluide pour l’affichage des plats

## Pages à développer

### Page Accueil
- Carrousel des plats du jour et menus spéciaux  
- Présentation du restaurant, concept et services  
- Section de service avec photo pizza animée
- Accès rapide vers Menu, Commande et Contact  
- Témoignages / Avis clients  

### Page Menu
- Liste complète des plats disponibles  
- Filtres par type (Categories)  
- Barre de recherche et pagination dynamique  
- Quand on clique sur le nom de plat on passe à la page details du plat correspondant

### Page Détails du Plat
- Description complète, photos et ingrédients  
- Options de personnalisation (taille, quantité)  
- Calcul automatique du prix  
- Bouton “Add to Cart”  

### Page Panier
- Liste des plats choisis avec quantités et total dynamique  
- Possibilité d'ajouter quantité ou supprimer un plat  
- Affichage du total TTC et bouton “Checkout”  qui passe à la page paiement 

### Page Informations & Paiement & Pdf
- Champs utilisateur avec validation (Nom, Adresse, Téléphone, Email)  
- Résumé du panier et total  
- Mode de paiement : paiement à la livraison par défaut  
- Bouton “Confirm your order”  
- Quand on clique sur le boutton le pdf sera télecharger automatiquement aprés un alert "Commande bien envoyée"

### Page À propos / Contact
- Présentation du restaurant et du chefs  
- Formulaire de contact avec validation JS REGEX
- Informations : Nom, Email, Téléphone, Message
- FAQ simple  
- Carte Google Maps  
