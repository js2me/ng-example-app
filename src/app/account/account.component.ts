import {ChangeDetectionStrategy,  Component,  OnInit, NgZone} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {UserModel} from '../shared/models/user.model';

@Component({
  selector: 'account-page',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AccountComponent implements OnInit {
  user: UserModel;

  constructor(private userService: UserService, private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(()=>{
      this.userService.userData.subscribe(_user=>this.ngZone.run(()=>{
        this.user=_user;
      }));
    });
  }

  ngOnInit() {
  }

}
