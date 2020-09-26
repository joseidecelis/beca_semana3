import { Router } from '@angular/router';
import { LoginService } from './../service/login.service';
import { LogginObject, Session } from './../dto/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: LogginObject = new LogginObject();
  session: Session = new Session();

  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(): void{

    this.loginService.login(this.login).subscribe(
      (resp) => {
        this.session = resp;
        this.loginService.setSession(this.session);
        alert(this.session.token);
        this.route.navigate(['lista']);
      }, (error) => {
        console.log(error);
      }
    );
  }
  cerrarSesion(){
    if (this.session.token){
      localStorage.clear();
      alert('Sesion Cerrada');
    }
    alert('no hay sesiones iniciadas');
  }
}
