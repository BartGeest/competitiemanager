import { Component, OnInit } from '@angular/core';

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
