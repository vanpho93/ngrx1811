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
      password: new FormControl(''),
      rePassword: new FormControl(''),
      isMale: new FormControl(true)
    }, passwordMustMatch);
  }

  ngOnInit() {
  }

  signUp() {
    console.log(this.formSignUp);
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

function passwordMustMatch(f: FormGroup) {
  const passwordValue = f.get('password').value;
  const rePasswordValue = f.get('rePassword').value;
  if (passwordValue === rePasswordValue) return null;
  return { mustMatch: true };
}
