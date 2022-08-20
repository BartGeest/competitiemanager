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
      if (route.data['role'] && route.data['role'][0] !== currentUser.roles[0]){
        // TODO: navigate of een alert oid doen dat je er niet heen kan gaan want je hebt de juiste rollen niet
        return false;
      }

      return true;
    }

    this.router.navigate([this.path.getLogoutPath], {queryParams: {returnUrl: state.url}});
    return false;
  }
}
