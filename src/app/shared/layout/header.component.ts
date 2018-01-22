import {Component} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService) {
  }


  logout(){
    this.auth.logout();
  }
}
