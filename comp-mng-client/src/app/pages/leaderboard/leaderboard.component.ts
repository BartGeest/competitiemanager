import { Component, OnInit } from '@angular/core';
import {LeaderboardRow} from "../../model/LeaderboardRow";

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  table_headers: string[] = [
    'Medewerker',
    '# Teams',
    'TGW',
    'TGS',
    'TVW',
    'Punten'
  ];

  ph_leaderboard: LeaderboardRow[] = [
    new LeaderboardRow('kees', 1,1,1,1,1),
    new LeaderboardRow('klaas', 1,1,1,1,1),
    new LeaderboardRow('kevin', 1,1,1,1,1,)
  ]

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: call naar back-end om goede info op te halen

}
