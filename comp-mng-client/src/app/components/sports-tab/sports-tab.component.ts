import { Component, OnInit } from '@angular/core';
import {TITLES} from "../../constants/constants";

@Component({
  selector: 'app-sports-tab',
  templateUrl: './sports-tab.component.html',
  styleUrls: ['./sports-tab.component.css']
})
export class SportsTabComponent implements OnInit {

  sport_names: string[];

  constructor() {
    this.sport_names = [
      TITLES.sports.football,
      TITLES.sports.rugby,
      TITLES.sports.basketball,
      TITLES.sports.baseball,
      TITLES.sports.volleyball
    ];
  }

  ngOnInit(): void {
  }

  //TODO: wanneer de sport is gewijzigd (click) dan event uitgooien (EventEmitter?)
  // dit ten behoeve van calls naar de back-end om de goede data op te halen

}
