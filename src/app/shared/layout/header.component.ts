import {ChangeDetectorRef, Component, HostBinding, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {UserModel} from '../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.auth') isAuth: boolean = false;
  user: UserModel;

  @HostBinding('class.menu-showed') menuShowed: boolean = false;
  constructor(private auth: AuthService, private userService: UserService, private ngZone: NgZone, private router: Router) {
  }


  ngOnInit() {
    this.ngZone.runOutsideAngular(() => {
      if(window.innerWidth <= 580){
        document.getElementById('menu-button').addEventListener('click', ()=>this.ngZone.run(()=>{
          this.menuShowed = !this.menuShowed;
        }));
        let links:NodeList = document.querySelectorAll('.menu a');
        for(let x =0; x< links.length;x++){
          links[x].addEventListener('click',()=>this.ngZone.run(()=>{
            this.menuShowed = false;
          }));
        }
      }
      this.auth.isAuth.subscribe((_isAuth: boolean) => this.ngZone.run(() => {
        this.isAuth = _isAuth;
      }));
      this.userService.userData.subscribe((data: UserModel) => this.ngZone.run(() => {
        this.user = data
      }));
    })
  }

  logout() {
    this.ngZone.run(() => {
      this.auth.logout();
      this.router.navigate(['login']);
    })
  }
}
