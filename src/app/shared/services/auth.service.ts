import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {LoginModel} from '../models/login.model';
import {BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {JwtService} from './jwt.service';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  public isAuth = this.isAuthSubject.asObservable();

  constructor(private api: ApiService, private jwt: JwtService, private router: Router) {
    if(this.jwt.getToken()){
      this.isAuthSubject.next(true);
    }
  }

  getAuthToken(): (string|null) {
    return this.jwt.getToken();
  }

  login(loginForm: LoginModel): Observable<any> {
    return this.api.post('/auth/login', loginForm).map((data: any) => {
      console.log('success login', data);
      this.jwt.setToken(data.token);
      this.isAuthSubject.next(true);
      return data;
    }, error => {
      console.log(error);
    });
  }


  logout() {
    this.jwt.destroyToken();
    this.isAuthSubject.next(false);
    this.router.navigate(['login']);
  }

}
