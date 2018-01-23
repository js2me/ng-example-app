import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Router} from '@angular/router';
import {PasswordConfirmValidator} from '../shared/validators/password-confirm.validator';
import {emailRegex, passwordRegex, usernameRegex} from '../shared/regexes/index';

@Component({
  selector: 'registration-page',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.formBuilder.group({
    username: ['',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern(usernameRegex)
        ]
      )
    ],
    email: ['',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern(emailRegex)
        ])
    ],
    password: ['',
      Validators.compose(
        [
          Validators.required,
          Validators.pattern(passwordRegex)
        ]
      )
    ],
    confirmPassword: ['', Validators.compose([
      Validators.required,
      PasswordConfirmValidator
    ])]
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }



  login() {
    if (this.registrationForm.status === 'VALID') {
      this.authService.registerNewUser(this.registrationForm.value).subscribe(() => {
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.registrationForm.controls['password'].reset();
        this.registrationForm.controls['confirmPassword'].reset();
      });
    }
  }

}
