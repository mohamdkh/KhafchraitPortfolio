import { IProject } from '../../IProject';

export const Covid19App: IProject = {
  id: 'A1B3308D-8BC5-4A7B-81A7d-4190A<qd9A41D54',
  name: 'Projet visualisation données Covid-19',
  description:
    "Création d'une application pour l'analyse, visualisation des données de Covid-19 et sensibilisation contre covid 19",
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
      'Espace Authentification et Connection pour les administrateurs',
    'Visualsation les résultats selon une date donnée',
    "Affichage de l'évolution de la pandémie",
    'Affichage cartographique de la répartition de covid-19 sur le territoire national',
    "Suivi des nouvelles de la pandémie "

  ],
  tags: ['java','sig'],
  techStuff: [
    "Spring boot","Bootstrap","Angular 5","MySQL","OpenLayer","GeoServer"

  ],
  additionalData: [
  ]
};
