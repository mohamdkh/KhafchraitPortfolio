import { IProject } from '../../IProject';

export const AnalyseConsommation: IProject = {
  id: 'A1B3308D-8BC5-4A7B-81A7-4190A9sdffA41D0B',
  name: 'Projet Analyse de la consommation en eau potable',
  description:
    " Développement Fullstack et déploiement d'une application web d'analyse de"
   +" consommation en eau potable de la région d'Agadir.",
  projectLink: null,
  liveUrl: null,
  isFeatured: true,
  features: [
    "Création d'un espace Login",
    "Visualisation de la consommation ",
    "Application des filtrages par secteur/Année/Periode ou par type de consommateur",
    "Création d'un espace de la configuration",
    "Gestion des secteurs commerciaux dans les secteurs hydraulique : Ajout/Suppression/Visualisation d'un secteur Commercial/Hydraulique",
  ],
  tags: ['sig','frontend','java'],
  techStuff: [
    "Spring boot",
    "Angular 10",
    "Bootstrap",
    "UML",
    "JWT",
    "MySQL"

  ],
  additionalData: [{
    title:'version 1',data:["version 1 de l'application a été réalisé par Spring MVC , la transformation a été appliqué pour des raisons techniques,"]
  },
  {
    title:'Format des données',data:["Le format brûte des données est le CSV et qui vont être stocké par la suite dans la base de données"]
  },
  ]
};
