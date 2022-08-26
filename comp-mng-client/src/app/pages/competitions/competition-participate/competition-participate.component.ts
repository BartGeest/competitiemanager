import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competition-participate',
  templateUrl: './competition-participate.component.html',
  styleUrls: ['./competition-participate.component.css']
})
export class CompetitionParticipateComponent implements OnInit {

  team_columns: string[] = [
    'id',
    'eigenaar',
    'naam',
    'gewonnen',
    'gelijk',
    'verloren'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
