import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  /**
   * get methodes die een endpoint teruggeven
   */

  get getAuthUrl(): string {
    return environment.url.auth;
  }

  get getCompetitionsUrl(): string {
    return environment.url.competition.retrieve;
  }

  get getCompetitionParticipationUrl(): string {
    return environment.url.competition.participate;
  }

  get getSingleCompetitionUrl(): string {
    return environment.url.competition.single;
  }

  get getTeamsOverviewUrl(): string {
    return environment.url.team.overview;
  }

  get getPlayableTeamsUrl(): string {
    return environment.url.team.playable;
  }

  get getTeamsCreationUrl(): string {
    return environment.url.team.creation;
  }

  get getTeamNameCheckUrl(): string {
    return environment.url.team.nameCheck;
  }
}
