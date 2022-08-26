import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-trade-creation',
  templateUrl: './trade-creation.component.html',
  styleUrls: ['./trade-creation.component.css']
})
export class TradeCreationComponent implements OnInit {

  isRowClicked: boolean = false;

  team_columns: string[] = [
    'Naam',
    'Sport',
    'Competitie',
    'Gewonnen',
    'Gelijk',
    'Verloren'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(): void {

    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
