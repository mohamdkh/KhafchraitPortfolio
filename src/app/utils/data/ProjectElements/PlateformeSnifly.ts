import { IProject } from '../../IProject';

export const PlatformeSnifly: IProject = {
  id: 'A1B3308D-8BC5-4A7B-81A7-4190Ads9A41D0B',
  name: 'Plateforme Snifly',
  description:
    "Conception et Développement Fullstack et Mobile d'une application de gestion des factures",
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    "Développement des Api avec l'architecture DAL-BLL-API",
    "Sécurisation des api avec JWT",
    "Création d'un espace de connexion",
    "Création de CRUD (Create, read, update, delete) de la partie Product",
    "Création de CRUD (Create, read, update, delete) de la partie Marque",
    "Création de CRUD (Create, read, update, delete) de la partie Facture",
    "Création de la page de configuration"

  ],
  tags: ['.net','frontend','mobile'],
  techStuff: [
    ".net core",
    "Xamarin forms",
    "Angular 10",
    "Azure"

  ],
  additionalData: [{
    title:'contributeur',data:['Le projet est sous forme d un stage qui a été réalisé avec un collègue : Oussama Aouinatou']
  },
  ]
};
