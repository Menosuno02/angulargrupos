import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Alumno } from '../models/Alumno';

@Injectable()
export class ServiceGrupos {
  constructor(private _http: HttpClient) {}

  getAlumnos(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Alumnos/FiltrarCurso/2023';
    return this._http.get(url + request);
  }

  create(alumno: Alumno): Observable<any> {
    var request = 'api/alumnos/insertalumno';
    var json = JSON.stringify(alumno);
    var header = new HttpHeaders().set('Content-Type', 'application/json');
    var url = environment.urlApi + request;
    return this._http.post(url, json, { headers: header });
  }
}
