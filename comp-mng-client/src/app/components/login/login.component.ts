import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {UrlService} from "../../services/url/url.service";
import {PathService} from "../../services/path/path.service";

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

  constructor(private authService: AuthService, private router: Router, private path: PathService) { }

  onSubmit(): void {
    this.authService.login(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value)
        .subscribe((user) => {

          if (user.roles[0] === 'ROLE_EMPLOYEE') {
            this.router.navigate([this.path.getUserDashboardPath]);
          } else if (user.roles[0] === 'ROLE_ADMIN') {
            this.router.navigate([this.path.getAdminDashBoardPath]);
          }
        })
  }

}
