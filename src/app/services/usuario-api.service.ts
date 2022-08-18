import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Usuario} from "../model/Usuario";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {
  basePath = 'http://localhost:8080/api/medicos';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.log(`An error occurred: ${error.error.message}`);
    } else{
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError('Something happened with request, please try again later');
  }

  getAll(): Observable<Usuario>{
    return this.http.get<Usuario>(this.basePath, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getUsuarioById(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.basePath}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addUsuario(item: any): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.basePath}`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
