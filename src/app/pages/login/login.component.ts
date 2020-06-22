import { Component, OnInit } from '@angular/core';
import { UsersapiService } from 'src/app/services/ApiNode.service';
import * as jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: UsersapiService, private router: Router) { }

  msgAlert: string;

  ngOnInit(): void {
    // if(this.login.checkestatusLogin()){
    //   this.router.navigate(['/inicio'])
    // }else{
    //   localStorage.setItem('estatusLogin', 'false');
    //   localStorage.setItem('token', '');
    // } 
  }
  async Login(userName, password) {
    const body: any = { userName, password };
    const response: object = await this.login.login(body);
    console.log(response);
  // }
    //@ts-ignore
    const { ok } = response;
    //@ts-ignore
    const{error} = response;

    if (ok) {
      localStorage.setItem('token', response[Object.keys(response)[2]]);
      const decoded = jwt_decode(localStorage.getItem('token'));
      console.log(decoded);
      localStorage.setItem('estatusLogin', 'true');
      this.router.navigate(['/inicio']);
      
    } else {
      //@ts-ignore
      this.msgAlert = error.msg;
    }
  }

}
