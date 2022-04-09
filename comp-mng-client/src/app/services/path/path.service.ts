import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  /**
   * get methodes die een (absolute) client path teruggeeft
   */

  get getDashboardPath(): string {
    return environment.path.dashboard;
  }

  get getCompetitionPath(): string {
    return environment.path.competition;
  }

  get getTeamsOverviewPath(): string {
    return environment.path.teams.overview;
  }

  get getTeamsCreationPath(): string {
    return environment.path.teams.creation;
  }

  get getForecastsPath(): string {
    return environment.path.forecasts;
  }

  get getResultsPath(): string {
    return environment.path.results;
  }

  get getMarketPath(): string {
    return environment.path.market;
  }

  get getLeaderboardPath(): string {
    return environment.path.leaderboard;
  }

  get getManualPath(): string {
    return environment.path.manual;
  }

  get getPassChangePath(): string {
    return environment.path.change;
  }

  get getLogoutPath(): string {
    return environment.path.logout;
  }

}
