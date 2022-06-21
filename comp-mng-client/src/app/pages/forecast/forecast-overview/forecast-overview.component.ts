import { Component, OnInit } from '@angular/core';
import {ForecastRow} from "../../../model/ForecastRow";
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.css']
})
export class ForecastOverviewComponent implements OnInit {

  isRowClicked: boolean = false

  //TODO: verplaatsen naar constants
  row_headers: string[] = [
    'Sport',
    'Competitie',
    'Thuis',
    'Uit',
    'Start over',
    'Voorspelling'
  ];

  //TODO: later vervangen met echte data van back-end
  ph_forecasts: ForecastRow[] = [
    new ForecastRow('Voetbal', 'divisie 1', 'team jantje', 'team kees', new Date(), 'fulltime'),
    new ForecastRow('Rugby', 'divisie 12', 'team Gurt', 'team Kaas', new Date(), 'under/over'),
    new ForecastRow('Honkbal', 'divisie 69', 'team Slaan', 'team Homerun', new Date(), 'correct score')
  ]

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
  }

  randoMethod() {
    //TODO: nog de methode anders noemen en iets anders doen dan alleen dit?
    this.isRowClicked = !this.isRowClicked;
  }

  navToForecastCreation() {
    this.router.navigate([this.path.getForecastCreationPath], {relativeTo: this.route});
  }

}
