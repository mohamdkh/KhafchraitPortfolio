import { IProject } from '../../IProject';

export const JeuGoData: IProject = {
  id: 'A1B3308D-8BC5-4A7B-81A7-4190A9A41D0B',
  name: 'Projet jeu Go',
  description:
    "c'est un jeu console similaire au famous jeu Go ",
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    'création des interfaces Humain machines',
    "Gestion de l'nternalisation de l'application (englais, francais, espagnol)",
    "Choix de mode de jeu (facile, intermediaire, difficile)",
    "Choix de l'adversaire (Humain, Machine)"

  ],
  tags: ['autre'],
  techStuff: [
    "Programmation en C",

  ],
  additionalData: [{
    title:'contributeur',data:['Le projet a été réalisé avec un collègue : Salmane Zeradi']
  },
  ]
};
