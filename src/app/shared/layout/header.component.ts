import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: (UserModel | null) =null;


  constructor(private auth: AuthService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.userData.subscribe((data: UserModel) => {
      this.user = data;
    })
  }


  logout() {
    this.auth.logout();
  }
}
