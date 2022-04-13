import { Component, OnInit } from '@angular/core';
import {SPORTS} from "../../constants/constants";

@Component({
  selector: 'app-sports-tab',
  templateUrl: './sports-tab.component.html',
  styleUrls: ['./sports-tab.component.css']
})
export class SportsTabComponent implements OnInit {

  sport_names: string[];

  constructor() {
    this.sport_names = [
      SPORTS.football,
      SPORTS.rugby,
      SPORTS.basketball,
      SPORTS.baseball,
      SPORTS.volleyball
    ];
  }

  ngOnInit(): void {
  }

  //TODO: wanneer de sport is gewijzigd (click) dan event uitgooien (EventEmitter?)

}
