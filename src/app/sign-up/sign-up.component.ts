import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  formSignUp: FormGroup;
  constructor() {
    this.formSignUp = new FormGroup({
      email: new FormControl('', [Validators.email]),
      name: new FormControl(''),
      password: new FormControl('', passwordMustMatch(this.formSignUp)),
      rePassword: new FormControl('', passwordMustMatch(this.formSignUp)),
      isMale: new FormControl(true)
    });
  }

  ngOnInit() {
  }

  signUp() {
    console.log(this.formSignUp.value);
  }

  passwordMustMatch() {
    if (!this || !this.formSignUp) return null;
    const rePassword = this.formSignUp.get('rePassword');
    const password = this.formSignUp.get('password');
    // return email.errors && email.errors.email && email.touched;
    if (rePassword.value === password.value) return null;
    return { notMatch: true };
  }

  get shouldShowEmailWarning() {
    const email = this.formSignUp.get('email');
    // return email.errors && email.errors.email && email.touched;
    return email.invalid && email.touched;
  }
}

function bannedName(f: FormControl) {
  if (f.value !== 'Nam') return null;
  return { banned: true };
}

function passwordMustMatch(formGroup: FormGroup) {
  return () => {
    if (!formGroup) return null;
    const rePassword = formGroup.get('rePassword');
    const password = formGroup.get('password');
    // return email.errors && email.errors.email && email.touched;
    if (rePassword.value === password.value) return null;
    return { notMatch: true };
  };
}
