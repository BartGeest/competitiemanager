import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CompetitionService} from "../../services/competition/competition.service";
import {CompetitionResponse} from "../../model/competition/CompetitionResponse";

@Injectable({
  providedIn: 'root'
})
export class CompetitionResolver implements Resolve<CompetitionResponse> {

  constructor(private competitionService: CompetitionService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CompetitionResponse> {
    return this.competitionService.getCompetitionsBySport();
  }
}
