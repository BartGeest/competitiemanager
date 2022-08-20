import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../services/path/path.service";
import {TEXTS, TITLES} from "../../../constants/constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  bl_competitions: string = TITLES.dashboard.user.competitions;
  bt_competitions: string = TEXTS.dashboard.user.competitions;
  competitionsPath: string = this.path.getCompetitionOverviewPath;

  bl_teams: string = TITLES.dashboard.user.teams;
  bt_teams: string = TEXTS.dashboard.user.teams;
  teamsPath: string = this.path.getTeamsOverviewPath;

  bl_forecasts: string = TITLES.dashboard.user.forecasts;
  bt_forecasts: string = TEXTS.dashboard.user.forecasts;
  forecastsPath: string = this.path.getForecastOverviewPath;

  bl_results: string = TITLES.dashboard.user.results;
  bt_results: string = TEXTS.dashboard.user.results;
  resultsPath: string = this.path.getResultsSelectionPath;

  bl_market: string = TITLES.dashboard.user.market;
  bt_market: string = TEXTS.dashboard.user.market;
  marketPath: string = this.path.getMarketOverviewPath;

  bl_leaderboard: string = TITLES.dashboard.user.leaderboard;
  bt_leaderboard: string = TEXTS.dashboard.user.leaderboard;
  leaderboardPath: string  = this.path.getLeaderboardPath;

  bl_manual: string = TITLES.dashboard.user.manual;
  bt_manual: string = TEXTS.dashboard.user.manual;
  manualPath: string = this.path.getManualOverviewPath;

  bl_changePass: string = TITLES.dashboard.user.changePass;
  bt_changePass: string = TEXTS.dashboard.user.changePass;
  changePassPath: string = this.path.getPassChangePath;

  constructor(private path: PathService) { }

  ngOnInit(): void {

  }

}
