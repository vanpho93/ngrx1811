import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  user: UserInfo;
  formSignIn: FormGroup;
  isChecked = false;
  constructor(private userService: UserService) {
    this.createForm();
    this.checkSignInStatus();
  }
  createForm() {
    this.formSignIn = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  signIn() {
    const { value } = this.formSignIn;
    this.userService.signIn(value)
    .then(res => this.user = res.user);
  }

  checkSignInStatus() {
    this.userService.check()
    .then(res => this.user = res.user)
    .catch(user => user)
    .then(() => this.isChecked = true);
  }
}

interface UserInfo {
  name: string;
  email: string;
}
