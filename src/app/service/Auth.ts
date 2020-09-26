import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService,
              private route: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.loginService.isActiveSesion()){
      return true;
    }

    this.route.navigate(['login']);
    return false;
  }


}
