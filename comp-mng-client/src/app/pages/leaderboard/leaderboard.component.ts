import {Component, OnInit} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  //TODO: call naar back-end om goede info op te halen

}
