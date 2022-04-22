import { Component, OnInit } from '@angular/core';
import {CompetitionRow} from "../../../model/CompetitionRow";
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-compeition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.css']
})
export class CompetitionOverviewComponent implements OnInit {

  comp_columns: string[] = [
    'id',
    'naam',
    '# deelnemers',
    'limiet deelnemers',
    'begint over'
  ];

  isRowClicked: boolean = false;

  //placeholder data
  ph_comps: CompetitionRow[] = [
    new CompetitionRow(1, 'jemoeder', 69, 100, new Date()),
    new CompetitionRow(2, 'jevader', 42, 100, new Date()),
    new CompetitionRow(3, 'jezus', 88, 100, new Date()),
    new CompetitionRow(4, 'neef', 36, 100, new Date())
  ];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
  }

  navToCompParticipate(): void {
    //TODO: andere methode aanroepen wanneer er een row is geklikt (dus vanuit de emit in interactive table)
    // methode zorgt voor een popup met de vraag of je het zeker weet of je aan deze competitie mee wilt doen
    // vanuit de popup (modal; zie clarity site) de navigate aanroepen,
    this.router.navigate([this.path.getCompetitionParticipationPath], {relativeTo: this.route});
  }

  onRowClick(): void {
    console.log('je moeder');
    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
