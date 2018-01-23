import {AbstractControl} from '@angular/forms';
export function PasswordConfirmValidator(c: AbstractControl): { invalid: boolean } {
  if(!c || !c.parent) return;
  if (c.parent.get('password').value !== c.parent.get('confirmPassword').value) {
    return {invalid: true};
  }
}
