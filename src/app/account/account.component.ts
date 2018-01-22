import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {UserModel} from '../shared/models/user.model';

@Component({
  selector: 'account-page',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  user: UserModel;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((userData:(UserModel|any)) => {
      this.user = userData;
    })
  }

}
