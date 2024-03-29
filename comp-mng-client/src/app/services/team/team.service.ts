import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {Observable} from "rxjs";
import {TeamsResponse} from "../../model/team/TeamsResponse";
import {TeamCreationResponse} from "../../model/team/TeamCreationResponse";

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getTeamsBySport(sportname: string = 'FOOTBALL'): Observable<TeamsResponse> {
    return this.http.get<TeamsResponse>(this.url.getTeamsOverviewUrl + sportname);
  }

  getTeamsThatCanPlay(sportname: string = 'FOOTBALL'): Observable<TeamsResponse> {
    return this.http.get<TeamsResponse>(this.url.getPlayableTeamsUrl + sportname);
  }

  createTeam(sportname: string, teams: string[]): Observable<TeamCreationResponse> {
    return this.http.post<TeamCreationResponse>(this.url.getTeamsCreationUrl, {sportname, teams});
  }

  nameIsTaken(name: string) : Observable<boolean> {
    return this.http.get<boolean>(this.url.getTeamNameCheckUrl + name);
  }
}
