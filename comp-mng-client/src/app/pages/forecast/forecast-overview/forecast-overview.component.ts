import { Component, OnInit } from '@angular/core';
import {ForecastRow} from "../../../model/ForecastRow";
import {SPORTS} from "../../../constants/constants";

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.css']
})
export class ForecastOverviewComponent implements OnInit {

  isRowClicked: boolean = false

  row_headers: string[] = [
    'Sport',
    'Competitie',
    'Thuis',
    'Uit',
    'Start over',
    'Voorspelling'
  ];

  //placeholder data
  ph_forecasts: ForecastRow[] = [
    new ForecastRow(SPORTS.football, 'divisie 1', 'team jantje', 'team kees', new Date(), 'fulltime'),
    new ForecastRow(SPORTS.rugby, 'divisie 12', 'team Gurt', 'team Kaas', new Date(), 'under/over'),
    new ForecastRow(SPORTS.baseball, 'divisie 69', 'team Slaan', 'team Homerun', new Date(), 'correct score')
  ]

  constructor() { }

  ngOnInit(): void {
  }

  randoMethod() {
    console.log('inside randoMethod -_-');
    this.isRowClicked = !this.isRowClicked;
  }

}
