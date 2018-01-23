import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../models/user.model';
@Injectable()
export class UserService {
  public userSubject = new BehaviorSubject<UserModel>(this.getEmptyUserData());

  public userData = this.userSubject.asObservable();

  constructor(private api: ApiService) {
    const cachedUserData = localStorage.getItem('userData');
    if (cachedUserData && cachedUserData !== 'null') {
      this.userSubject.next(JSON.parse(cachedUserData) as UserModel);
    }
  }


  public getCurrentUser(): Observable<UserModel> {
    return this.userData;
  }


  public setCurrentUser(user: UserModel) {
    this.userSubject.next(user);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  public clearUserData() {
    this.userSubject.next(this.getEmptyUserData());
    localStorage.removeItem('userData');
  }

  public getEmptyUserData(): UserModel {
    return {
      bio: '',
      createdAt: '',
      email: '',
      id: null,
      image: null,
      token: '',
      updatedAt: '',
      username: ''
    };
  }

  public getCurrentUserData(): UserModel {
    return this.userSubject.getValue();
  }

}
