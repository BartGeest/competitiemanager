import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

import { AuthService } from "../services/auth/auth.service";
import {PathService} from "../services/path/path.service";

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService, private path: PathService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const currentUser = this.auth.getCurrentUser;
    if (currentUser) {
      return true;
    }

    this.router.navigate([this.path.getLogoutPath], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
