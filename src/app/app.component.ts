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
  formSignIn: FormGroup;
  constructor(private userService: UserService) {
    this.createForm();
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
    .then(res => console.log(res));
  }
}
