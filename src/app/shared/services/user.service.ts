import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
@Injectable()
export class UserService {
  private userSubject = new BehaviorSubject<UserModel>(null);
  public userData = this.userSubject.asObservable();

  constructor(private api: ApiService) {
    const cachedUserData = localStorage.getItem('userData');
    if(cachedUserData && cachedUserData !== 'null'){
      this.userSubject.next(JSON.parse(cachedUserData) as UserModel);
    }
  }


  public getCurrentUser(): Observable<UserModel> {
    if (this.userSubject.getValue() === null) {
      return this.api.get('/account').map((data: UserModel) => {
        this.userSubject.next(data);
        localStorage.setItem('userData',JSON.stringify(data));
        return data;
      });
    }
    return this.userData;
  }


  public clearUserData(){
    this.userSubject.next(null);
    localStorage.removeItem('userData');
  }

}
