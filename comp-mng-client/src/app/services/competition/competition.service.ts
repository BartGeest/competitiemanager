import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../model/competition/CompetitionResponse";
import {SingleCompResponse} from "../../model/competition/SingleCompResponse";
import {ParticipationResponse} from "../../model/competition/ParticipationResponse";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getCompetitionsBySport(sport: string = 'FOOTBALL'): Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(this.url.getCompetitionsUrl + sport);
  }

  getSingleCompetition(id: number): Observable<SingleCompResponse> {
    return this.http.get<SingleCompResponse>(this.url.getSingleCompetitionUrl + id);
  }

  addTeamToCompetition(competitionId: number, teamId: number): Observable<ParticipationResponse> {
    return this.http.post<ParticipationResponse>(this.url.getCompetitionParticipationUrl, {competitionId, teamId});
  }
}
