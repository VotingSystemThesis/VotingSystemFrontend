import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FingerprintService {
  constructor(private http: HttpClient) {}
  url = 'localhost:8020/s3';
  validateFingerprint(dni: string) {
    return this.http.get(`${this.url}/${dni}/validate/true`);
  }
}
