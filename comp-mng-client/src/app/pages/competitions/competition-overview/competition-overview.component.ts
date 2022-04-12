import { Component, OnInit } from '@angular/core';
import {CompetitionRow} from "../../../model/CompetitionRow";

@Component({
  selector: 'app-compeition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.css']
})
export class CompetitionOverviewComponent implements OnInit {

  //placeholder data
  ph_comps: CompetitionRow[] = [
    new CompetitionRow(1, 'jemoeder', 69, 100, new Date()),
    new CompetitionRow(2, 'jevader', 42, 100, new Date()),
    new CompetitionRow(3, 'jezus', 88, 100, new Date()),
    new CompetitionRow(4, 'neef', 36, 100, new Date())
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
