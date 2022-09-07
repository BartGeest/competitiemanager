import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth/auth.service";
import {PathService} from "../services/path/path.service";
import {Roles} from "../model/domain/Roles";
import {ToastrService} from "ngx-toastr";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private auth: AuthService,
              private path: PathService,
              private toastr: ToastrService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.auth.getCurrentUser;
    if (currentUser) {
      if (route.data['role'] && !route.data['role'].every((role :string) => currentUser.roles.includes(role))){
        this.toastr.error('U heeft het recht niet om hier naartoe te gaan \n' +
              'U wordt teruggebracht naar het dashboard', 'Geen toegang')
          .onHidden.subscribe(() => {
          currentUser.roles.includes(Roles.User) ?
            this.router.navigate([this.path.getUserDashboardPath]) :
            this.router.navigate([this.path.getAdminDashBoardPath]);

          return false;
        });
      }

      return true;
    }

    this.toastr.error('U bent niet meer ingelogd. Log opnieuw in', 'Sessie verlopen')

    this.router.navigate([this.path.getLogoutPath], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
