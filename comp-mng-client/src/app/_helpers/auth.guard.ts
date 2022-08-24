import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "../services/auth/auth.service";
import {PathService} from "../services/path/path.service";
import {Roles} from "../model/Roles";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private path: PathService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.auth.getCurrentUser;
    if (currentUser) {
      if (route.data['role'] && !route.data['role'].every((role :string) => currentUser.roles.includes(role))){

        alert('U heeft geen rechten om hier naar toe te gaan. \n' +
              'U wordt teruggebracht naar het dashboard.');

        currentUser.roles.includes(Roles.User) ?
          this.router.navigate([this.path.getUserDashboardPath]) :
          this.router.navigate([this.path.getAdminDashBoardPath]);

        return false;
      }

      return true;
    }

    this.router.navigate([this.path.getLogoutPath], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
