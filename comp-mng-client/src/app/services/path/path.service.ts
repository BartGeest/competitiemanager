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

  get getMarketOverviewPath(): string {
    return environment.path.market.overview;
  }

  get getOfferCreationPath(): string {
    return environment.path.market.offer;
  }

  get getLeaderboardPath(): string {
    return environment.path.leaderboard;
  }

  get getManualOverviewPath(): string {
    return environment.path.manual.overview;
  }

  get getManualGeneralPath(): string {
    return environment.path.manual.general;
  }

  get getManualCompetitionsPath(): string {
    return environment.path.manual.competition;
  }

  get getManualTeamsPath(): string {
    return environment.path.manual.teams;
  }

  get getManualForecastPath(): string {
    return environment.path.manual.forecast;
  }

  get getManualMarketPath(): string {
    return environment.path.manual.market;
  }

  get getPassChangePath(): string {
    return environment.path.change;
  }

  get getLogoutPath(): string {
    return environment.path.logout;
  }

}
