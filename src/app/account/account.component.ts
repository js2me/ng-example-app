import {ChangeDetectionStrategy,  Component,  OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {UserModel} from '../shared/models/user.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'account-page',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AccountComponent implements OnInit {
  user: UserModel;

  constructor(private userService: UserService) {
    this.userService.userData.subscribe(_user=>this.user=_user);
  }

  ngOnInit() {
  }

}
