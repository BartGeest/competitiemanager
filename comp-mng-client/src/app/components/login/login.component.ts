import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {PathService} from "../../services/path/path.service";
import {Roles} from "../../model/domain/Roles";
import {User} from "../../model/domain/User";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username: new FormControl('', {validators: Validators.required, nonNullable: true}),
    password: new FormControl('', {validators: Validators.required, nonNullable: true}),
  });

  isBadCred: boolean = false;

  constructor(private authService: AuthService, private router: Router, private path: PathService) { }

  onSubmit(): void {
    this.authService.login(
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value)
        .subscribe({
          next: (user: User) => {
            if (user.roles.includes(Roles.User)) {
              this.router.navigate([this.path.getUserDashboardPath]);
            } else if (user.roles.includes(Roles.Admin)) {
              this.router.navigate([this.path.getAdminDashBoardPath]);
            }
          }
        });
  }
}
