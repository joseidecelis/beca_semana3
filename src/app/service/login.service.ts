import { Observable } from 'rxjs';
import { LogginObject, Session } from './../dto/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: LogginObject): Observable<any> {
    return this.http.post('http://localhost:8000/login', login);
  }

  setSession(session: Session): void{
    localStorage.setItem('token', session.token);
  }
  isActiveSesion(): boolean{
    return localStorage.getItem('token') != null;
  }
 /*  outSession(): void{
    return localStorage.clear();

  } */

}
