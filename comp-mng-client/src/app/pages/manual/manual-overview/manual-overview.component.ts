import { Component, OnInit } from '@angular/core';
import {TEXTS, TITLES} from "../../../constants/constants";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-manual-overview',
  templateUrl: './manual-overview.component.html',
  styleUrls: ['./manual-overview.component.css']
})
export class ManualOverviewComponent implements OnInit {

  ct_general = TITLES.manual.general;
  ct_competition = TITLES.manual.competition;
  ct_teams = TITLES.manual.teams;
  ct_forecast = TITLES.manual.forecast;
  ct_market = TITLES.manual.market;

  ctxt_general = TEXTS.manual.general;
  ctxt_competition = TEXTS.manual.competition;
  ctxt_teams = TEXTS.manual.teams;
  ctxt_forecast = TEXTS.manual.forecast;
  ctxt_market = TEXTS.manual.market;

  m_generalPath: string;
  m_competionPath: string;
  m_teamsPath: string;
  m_forecastPath: string;
  m_marketPath: string;

  constructor(private path: PathService) {
    this.m_generalPath = this.path.getManualGeneralPath;
    this.m_competionPath = this.path.getManualCompetitionsPath;
    this.m_teamsPath = this.path.getManualTeamsPath;
    this.m_forecastPath = this.path.getManualForecastPath;
    this.m_marketPath = this.path.getManualMarketPath;
  }

  ngOnInit(): void {
  }

}
