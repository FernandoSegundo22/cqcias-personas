import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:8080/api/personas';

  obtenerPersonasActivas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.apiUrl);
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiUrl}/${id}`);
  }
}