import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from '@angular/router';
import {AuthService} from "../../services/auth/auth.service";
import {PathService} from "../../services/path/path.service";
import {Roles} from "../../model/domain/Roles";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', Validators.required),
    password: new UntypedFormControl('', Validators.required),
  });

  isBadCred: boolean = false;

  constructor(private authService: AuthService, private router: Router, private path: PathService) { }

  onSubmit(): void {
    this.authService.login(
      this.loginForm.get('username')?.value,
      this.loginForm.get('password')?.value)
        .subscribe((user) => {

          if (user.roles.includes(Roles.User)) {
            this.router.navigate([this.path.getUserDashboardPath]);
          } else if (user.roles.includes(Roles.Admin)) {
            this.router.navigate([this.path.getAdminDashBoardPath]);
          }
        })
  }

}
