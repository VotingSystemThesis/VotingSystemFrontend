import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VoterService {
  getVoterUrl = `${environment.hostUrl}/voter`;

  constructor(private http: HttpClient) {}

  getVoterById(id: string) {
    return this.http.get(`${this.getVoterUrl}/${id}`);
  }
}
