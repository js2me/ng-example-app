import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {LoginModel} from '../models/login.model';
import {BehaviorSubject, Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import {JwtService} from './jwt.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';
import {RegisterModel} from '../models/register.model';

@Injectable()
export class AuthService {
  private isAuthSubject = new BehaviorSubject<boolean>(false);
  public isAuth = this.isAuthSubject.asObservable();

  constructor(private api: ApiService, private jwt: JwtService, private userService: UserService) {
    if(this.jwt.getToken()){
      this.isAuthSubject.next(true);
    }
  }

  getAuthToken(): (string|null) {
    return this.jwt.getToken();
  }

  login(user: LoginModel): Observable<any> {
    return this.api.post('/users/login', {user}).map(this.signIn.bind(this), error => {
      console.log(error);
    });
  }

  private signIn(data:any){
    this.jwt.setToken(data.user.token);
    this.isAuthSubject.next(true);
    this.userService.setCurrentUser(data.user);
    return data;
  }


  logout() {
    this.jwt.destroyToken();
    this.isAuthSubject.next(false);
    this.userService.clearUserData();
  }

  registerNewUser(user: RegisterModel): Observable<any>{
    return this.api.post('/users',{user}).map(this.signIn.bind(this), error=>{
      console.log(error);
    });
  }

}
