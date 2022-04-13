import { Component, OnInit } from '@angular/core';
import {TeamRow} from "../../../model/TeamRow";

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

  ph_teams: TeamRow[] = [
    new TeamRow(1, 'jemoeder', 'team-jemoeder', 1, 1, 5),
    new TeamRow(2, 'watmoetje', 'dikkehardekaas', 3, 3, 2),
    new TeamRow(3, 'ikhouvanmannen', 'pijpfestijn69', 7,0,1)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
