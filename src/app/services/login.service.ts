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
  validateVoter(voters: Votante[], voterToValidate: any): boolean {
    let voter = voters.find(
      (x) =>
        x.dni == voterToValidate.dni &&
        x.emissionDate == voterToValidate.emissionDate
    );
    if (voter?.name?.length! > 0) {
      return true;
    } else {
      return false;
    }
  }
}
