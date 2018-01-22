import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    name: ['',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9][a-zA-Z0-9_\s\-]*[a-zA-Z0-9](?<![_\s\-]{2,}.*)$')
        ])
    ],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }


  login() {
    if (this.loginForm.status === 'VALID') {
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigate(['account']);
      }, error => {
        console.log(error);
        this.loginForm.reset();
      });
    }
  }

}
