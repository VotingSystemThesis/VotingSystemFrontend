import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8080/s3';
  validateFingerprint(dni: string) {
    return this.http.get(`${this.url}/${dni}/validate/true`);
  }
}
