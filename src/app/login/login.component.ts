import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {emailRegex, passwordRegex} from '../shared/regexes/index';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    email: ['',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern(emailRegex)
        ])
    ],
    password: ['', Validators.compose([
      Validators.required,
      Validators.pattern(passwordRegex)
    ])]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private ngZone: NgZone) {
  }

  ngOnInit() {
  }



  login() {
    if (this.loginForm.status === 'VALID') {
        this.authService.login(this.loginForm.value).subscribe(() =>
          this.router.navigate(['/']), error => {
          console.log(error);
          this.loginForm.reset();
        });
    // this.ngZone.runOutsideAngular(()=>{
    //     this.authService.login(this.loginForm.value).subscribe(() => this.ngZone.run(()=>{
    //       this.router.navigate(['/']);
    //     }), error => this.ngZone.run(()=>{
    //       console.log(error);
    //       this.loginForm.reset();
    //     }));
    // });
    }
  }

}
