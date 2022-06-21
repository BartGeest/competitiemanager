import { Component, OnInit } from '@angular/core';
import {PathService} from "../../services/path/path.service";
import {TEXTS, TITLES} from "../../constants/constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bl_competitions: string = TITLES.dashboard.competitions;
  bt_competitions: string = TEXTS.dashboard.competitions;
  competitionsPath: string = this.path.getCompetitionOverviewPath;

  bl_teams: string = TITLES.dashboard.teams;
  bt_teams: string = TEXTS.dashboard.teams;
  teamsPath: string = this.path.getTeamsOverviewPath;

  bl_forecasts: string = TITLES.dashboard.forecasts;
  bt_forecasts: string = TEXTS.dashboard.forecasts;
  forecastsPath: string = this.path.getForecastOverviewPath;

  bl_results: string = TITLES.dashboard.results;
  bt_results: string = TEXTS.dashboard.results;
  resultsPath: string = this.path.getResultsSelectionPath;

  bl_market: string = TITLES.dashboard.market;
  bt_market: string = TEXTS.dashboard.market;
  marketPath: string = this.path.getMarketOverviewPath;

  bl_leaderboard: string = TITLES.dashboard.leaderboard;
  bt_leaderboard: string = TEXTS.dashboard.leaderboard;
  leaderboardPath: string  = this.path.getLeaderboardPath;

  bl_manual: string = TITLES.dashboard.manual;
  bt_manual: string = TEXTS.dashboard.manual;
  manualPath: string = this.path.getManualOverviewPath;

  bl_changePass: string = TITLES.dashboard.changePass;
  bt_changePass: string = TEXTS.dashboard.changePass;
  changePassPath: string = this.path.getPassChangePath;

  //TODO: admin dingen toevoegen - registreren & verwijderen

  constructor(private path: PathService) { }

  ngOnInit(): void {
    //TODO: andere knoppen laten zien bij inlog employee < > admin
  }

}
