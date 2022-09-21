import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Votante } from '../models/Voter';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  getVoterUrl = `${environment.hostUrl}/voter`;

  constructor(private http: HttpClient) {}

  getAllVoters() {
    return this.http.get(this.getVoterUrl);
  }
  isAuthenticated() {
    return localStorage.getItem('isAuthenticated') == 'true' ? true : false;
  }
  validateVoter(voters: Votante[], voterToValidate: any): boolean {
    let voter = voters.find(
      (x) =>
        x.dni == voterToValidate.dni &&
        x.emissionDate == voterToValidate.emissionDate
    );
    if (voter?.name?.length! > 0) {
      localStorage.setItem('dni', voter?.dni!);
      localStorage.setItem('votanteId', voter?.id!);
      return true;
    } else {
      localStorage.setItem('dni', '');

      return false;
    }
  }

  hasDni() {
    return localStorage.getItem('dni')?.length! > 0 ? true : false;
  }
}
