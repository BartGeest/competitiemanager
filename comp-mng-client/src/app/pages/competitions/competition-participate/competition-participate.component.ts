import { Component, OnInit } from '@angular/core';
import {TeamRow} from "../../../model/TeamRow";

@Component({
  selector: 'app-competition-participate',
  templateUrl: './competition-participate.component.html',
  styleUrls: ['./competition-participate.component.css']
})
export class CompetitionParticipateComponent implements OnInit {

  ph_teams: TeamRow[] = [
    new TeamRow(1, 'jemoeder', 'team-jemoeder'),
    new TeamRow(2, 'watmoetje', 'dikkehardekaas'),
    new TeamRow(3, 'ikhouvanmannen', 'pijpfestijn69')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
