import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../models/user.model';
@Injectable()
export class UserService {
  private userSubject = new BehaviorSubject<UserModel>(null);
  public userData = this.userSubject.asObservable();

  constructor(private api: ApiService) {

  }


  public getCurrentUser() {
    return this.api.get('/account').map((data: UserModel) => {
      this.userSubject.next(data);
    });
  }

}
