import {Component, EventEmitter, Output} from '@angular/core';
import {sportsDict} from "../../model/domain/SportsDictionary";

@Component({
  selector: 'app-sports-tab',
  templateUrl: './sports-tab.component.html',
  styleUrls: ['./sports-tab.component.css']
})
export class SportsTabComponent {

  sport_names: string[];

  @Output() sportNameEmitter = new EventEmitter<string>();

  constructor() {
    this.sport_names = Object.keys(sportsDict);
  }

  clickedSport(sportname: string) {

    this.sportNameEmitter.emit(sportsDict[sportname]);
  }
}
