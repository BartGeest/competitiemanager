import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {sportsDict} from "../../model/SportsDictionary";


@Component({
  selector: 'app-sports-tab',
  templateUrl: './sports-tab.component.html',
  styleUrls: ['./sports-tab.component.css']
})
export class SportsTabComponent implements OnInit {

  sport_names: string[];

  @Output() sportNameEmitter = new EventEmitter<string>();

  constructor() {
    this.sport_names = Object.keys(sportsDict);
  }

  ngOnInit(): void {
  }

  clickedSport(sportname: string) {

    this.sportNameEmitter.emit(sportsDict[sportname]);
  }
}
