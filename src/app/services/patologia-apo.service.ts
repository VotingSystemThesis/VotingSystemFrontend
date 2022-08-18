import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Patologia} from "../model/Patologia";
import {Ingresos} from "../model/Ingresos";

@Injectable({
  providedIn: 'root'
})
export class PatologiaApoService {
  private url: string = "http://localhost:8080/api/pacientes"

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

  getAllPatologiaByPacienteId(id: number) : Observable<Patologia>{
    return this.http.get<Patologia>(`${this.url}/${id}/patologia`)
      .pipe(retry(2), catchError(this.handleError));
  }

  addPatologias(pacientesId:number,item: any): Observable<Patologia>{
    return this.http.post<Patologia>(`${this.url}/${pacientesId}/patologia`, JSON.stringify(item),this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
