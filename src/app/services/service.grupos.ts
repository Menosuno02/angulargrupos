import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class ServiceGrupos {
  constructor(private _http: HttpClient) {}

  getAlumnos(): Observable<any> {
    let url = environment.urlApi;
    let request = 'api/Alumnos/FiltrarCurso/2023';
    return this._http.get(url + request);
  }
}
