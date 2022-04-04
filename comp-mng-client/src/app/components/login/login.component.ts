import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {ACCESS_TOKEN} from "../../constants/constants";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isBadCred: boolean = false;

  constructor(private authService: AuthService) { }

  onSubmit(): void {
    this.authService.login(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)
      .subscribe((response) => {
        console.log('response is: ' + response.accessToken);
        //TODO: functionaliteiten na inlog verder uitwerken
      })
  }

}
