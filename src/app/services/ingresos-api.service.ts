import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Ingresos} from "../model/Ingresos";
import {catchError, retry} from "rxjs/operators";
import {Usuario} from "../model/Usuario";

@Injectable({
  providedIn: 'root'
})
export class IngresosApiService {

  private url: string = "http://localhost:8080/api/medicos"
  basePath = 'http://localhost:8080/api/pacientes'
  base = 'http://localhost:8080/api/ingresos'

  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  handleError(error: HttpErrorResponse): Observable<never>{
    if (error.error instanceof ErrorEvent){
      console.log('An error ocurred: ',error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was:  ${error.error}`);
    }
    return throwError('Something happened with request, please try again later')
  }

  constructor(private http: HttpClient) { }

  getAllIngresosByMedicoId(id: number) : Observable<Ingresos>{
    return this.http.get<Ingresos>(`${this.url}/${id}/ingresos`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addIngresos(pacientesId:number,usuarioId:number,item: any): Observable<Ingresos>{
    return this.http.post<Ingresos>(`${this.basePath}/${pacientesId}/medicos/${usuarioId}/ingresos`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getIngresoById(id: number): Observable<Ingresos>{
    return this.http.get<Ingresos>(`${this.base}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

}
