import { Persona } from './../dto/persona';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http: HttpClient) { }

  guardar(persona: Persona): Observable<any> {
    return this.http.post('http://localhost:8000/save', persona);
  }

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8000/all');
  }

  findById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8000/find/${id}`);
  }
  onEdit(persona: Persona): Observable<any> {
    return this.http.post('http://localhost:8000/save', persona);
  }
}
