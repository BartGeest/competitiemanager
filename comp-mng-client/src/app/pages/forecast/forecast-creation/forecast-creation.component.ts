import { Component, OnInit } from '@angular/core';
import {MatchRow} from "../../../model/MatchRow";

@Component({
  selector: 'app-forecast-creation',
  templateUrl: './forecast-creation.component.html',
  styleUrls: ['./forecast-creation.component.css']
})
export class ForecastCreationComponent implements OnInit {

  isRowClicked: boolean = false;

  //TODO: verplaatsen naar constants
  row_headers: string[] = [
    'Competitie',
    'Thuis',
    'Uit',
    'Start over'
  ];

  //TODO: later vervangen met echte data van back-end
  ph_upcoming_matches: MatchRow[] = [
    new MatchRow(1, 'Competitie 1', 'team-jantje', 'team-kees', new Date()),
    new MatchRow(2, 'Competitie 2', 'team-3000', 'team-4000', new Date()),
    new MatchRow(3, 'Competitie 3', 'team-home', 'team-away', new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(): void {
    console.log('forecast-creation row is clicked for a match');

    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
