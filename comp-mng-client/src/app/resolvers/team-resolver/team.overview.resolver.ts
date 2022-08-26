import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {TeamService} from "../../services/team/team.service";
import {TeamsResponse} from "../../model/team/TeamsResponse";

@Injectable({
  providedIn: 'root'
})
export class TeamOverviewResolver implements Resolve<TeamsResponse> {

  constructor(private teamService: TeamService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeamsResponse> {
    return this.teamService.getTeamsBySport();
  }
}
