import { Component, OnInit } from '@angular/core';
import {OfferTeamRow} from "../../../model/OfferTeamRow";

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

  ph_team_offer: OfferTeamRow[] = [
    new OfferTeamRow('bla', 'bla', 'bla', 0, 0,0),
    new OfferTeamRow('sfsf', 'wefresf', 'segfseg', 0,0,0),
    new OfferTeamRow('sefsef', 'sefg', 'awrgv', 0,0,0)
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRowClick(): void {
    console.log('krijg de ... geen zin meeeeheeeeer');
    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
