import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as jwt_decode from 'jwt-decode';


const URL_API = environment.API.EndPoint.Users;

@Injectable({
  providedIn: 'root'
})
export class UsersapiService {

  constructor(private http: HttpClient) { }

  login = (body: { userName: string; password: string }): Promise<object> => {
    return new Promise((resolve) => {
      this.http
        .post(`${URL_API}login`, body)
        .toPromise()
        .then((res: object) => resolve(res))
        .catch((res: object) => resolve(res));
    });
  };

  checkestatusLogin(): boolean {
    const token = localStorage.getItem('token');
    const decoded = jwt_decode(token);
    var estatusLogin = localStorage.getItem('estatusLogin');

    if (estatusLogin == 'true') {
      //@ts-ignore
      if (decoded.exp == undefined) {
        return false;
      }

      const date = new Date(0);
      //@ts-ignore
      let tokenExpDate = date.setUTCSeconds(decoded.exp);

      if (tokenExpDate.valueOf() > new Date().valueOf()) {
        return true;
      }
    }
    return false;
  }

}