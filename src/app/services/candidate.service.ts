import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  url = `${environment.hostUrl}/candidate`;
  imageUrl = `${environment.imageUrl}`;
  constructor(private http: HttpClient) {}

  getAllCandidates(): Observable<any> {
    return this.http.get(this.url.toString());
  }
  getCandidateByElection(electionId: string) {
    return this.http.get(`${this.url}/voting/${electionId}`);
  }
  getProfilePic(id: string) {
    return this.http.get(`${this.imageUrl}/${id}`);
  }
  getProfilePicUrl() {}
}
