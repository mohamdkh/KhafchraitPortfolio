import { environment } from '../../environments/environment';

import { IProject } from './IProject';
import { testUniqueness } from './utils';

import {JeuGoData} from './data/ProjectElements/jeu-Go'
import {GestionParking} from './data/ProjectElements/Gestion-parking'
import {GestionBibliotheque} from './data/ProjectElements/Gestion-Bibliotheque'
import {NoteUrbanistique} from './data/ProjectElements/NoteUrbanistique'
import {ECommerce} from './data/ProjectElements/E-Commmerce'
import {ReservationAerienne} from './data/ProjectElements/ReservationAerienne'
import {Covid19App} from './data/ProjectElements/Covid-19'
import {TransactionImm} from './data/ProjectElements/TransactionImmobiliere'
import {PlatformeSnifly} from './data/ProjectElements/PlateformeSnifly'
import {AnalyseConsommation} from './data/ProjectElements/AnalyseConsommation'
import {ConceptionInforisk} from './data/ProjectElements/ConceptionInforisk'
import {BidonvilleApp} from './data/ProjectElements/BidonvilleApp'
import {ProjetGeomatique} from './data/ProjectElements/ProjetGeomatique'
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
const getAllProject = () => {
  const projects = [
    ProjetGeomatique,
    BidonvilleApp,
    ConceptionInforisk,
    AnalyseConsommation,
    PlatformeSnifly,
    TransactionImm,
    Covid19App,
    ReservationAerienne,
    ECommerce,
    NoteUrbanistique,
    GestionBibliotheque,
    GestionParking,
    JeuGoData,
  ];

  if (!environment.production) {
    const result = testUniqueness(projects, project => project.id);

    if (result.error) {
      const errorLog = [];
      result.duplicates.forEach((project: IProject) => {
        errorLog.push(`Duplicate E-id ${project.id} of ${project.name} `);
      });
      throw new Error(JSON.stringify(errorLog));
    }
  }

  return projects;
};

export const ALL_PROJECT_DATA = getAllProject();
