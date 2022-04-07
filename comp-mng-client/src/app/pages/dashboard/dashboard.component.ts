import { Component, OnInit } from '@angular/core';
import {PathService} from "../../services/path/path.service";
import { DASHBOARD } from "../../constants/constants";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  bl_competitions: string;
  competitionsPath: string;

  bl_teams: string;
  teamsPath: string;

  bl_forecasts: string;
  forecastsPath: string;

  bl_results: string;
  resultsPath: string;

  bl_market: string;
  marketPath: string;

  bl_leaderboard: string;
  leaderboardPath: string;

  bl_manual: string;
  manualPath: string;

  bl_changePass: string;
  changePassPath: string;

  //TODO: admin dingen toevoegen - registreren & verwijderen

  constructor(private path: PathService) {

    this.bl_competitions = DASHBOARD.competition;
    this.competitionsPath = this.path.getCompetitionPath;

    this.bl_teams = DASHBOARD.teams;
    this.teamsPath = this.path.getTeamsPath;

    this.bl_forecasts = DASHBOARD.forecasts;
    this.forecastsPath = this.path.getForecastsPath;

    this.bl_results = DASHBOARD.results;
    this.resultsPath = this.path.getResultsPath;

    this.bl_market = DASHBOARD.market;
    this.marketPath = this.path.getMarketPath;

    this.bl_leaderboard = DASHBOARD.leaderboard;
    this.leaderboardPath = this.path.getLeaderboardPath;

    this.bl_manual = DASHBOARD.manual;
    this.manualPath = this.path.getManualPath;

    this.bl_changePass = DASHBOARD.changePass;
    this.changePassPath = this.path.getPassChangePath;
  }

  ngOnInit(): void {
    //TODO: andere knoppen laten zien bij inlog employee < > admin
  }

}
