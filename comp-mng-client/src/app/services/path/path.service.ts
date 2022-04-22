import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  /**
   * get methodes die een client path teruggeeft
   */

  //TODO: methodes toevoegen voor nieuwe paths

  get getDashboardPath(): string {
    return environment.path.dashboard;
  }

  get getCompetitionOverviewPath(): string {
    return environment.path.competition.overview;
  }

  get getCompetitionParticipationPath(): string {
    return environment.path.competition.participate;
  }

  get getTeamsOverviewPath(): string {
    return environment.path.teams.overview;
  }

  get getTeamsCreationPath(): string {
    return environment.path.teams.creation;
  }

  get getForecastOverviewPath(): string {
    return environment.path.forecasts.overview;
  }

  get getForecastCreationPath(): string {
    return environment.path.forecasts.creation;
  }

  get getResultsSelectionPath(): string {
    return environment.path.results.selection;
  }

  get getMatchResultsPath(): string {
    return environment.path.results.matches;
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
