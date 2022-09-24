import { Partido } from './Partido';

export class Candidato {
  id?: string;
  name?: string;
  lastName?: string;
  politicalParty?: Partido;
  email?: string;
  gender?: boolean;
  dni?: string;
  birthDate?: Date;

  constructor() {}
}
