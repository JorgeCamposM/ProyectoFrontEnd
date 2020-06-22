import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersapiService} from './services/ApiNode.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private apiservice: UsersapiService, private router: Router){}

  canActivate():boolean{
    if(localStorage.getItem('token').length != 0){
      if(!this.apiservice.checkestatusLogin()){
        this.router.navigate(['login']);
        return false;
      }else{
        return true;
      }
    }else{
      this.router.navigate(['login']);
      return false;
    }
    
  }
}
