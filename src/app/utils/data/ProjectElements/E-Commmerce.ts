import { IProject } from '../../IProject';

export const ECommerce: IProject = {
  id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D54hfgh',
  name: 'Application web e-commerce',
  description:
    "Il s'agit d'une application web qui gère un service de création et de livraison de gâteaux sur commande",
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
      'Espace Authentification et Connection',
    ' Recette avec choix des ingrédients',
    "Envoie des commandes dans l'espace Utilisateur",
    "Suivi de statut d'une commande",
    'Annuler une commande non pris en charcge',
    'Boite messagerie pour la négociation avec l admnistrateur',

  ],
  tags: ['java'],
  techStuff: [
    "JEE native","thymeleaf","Bootstrap","JQuery"

  ],
  additionalData: [
  ]
};
