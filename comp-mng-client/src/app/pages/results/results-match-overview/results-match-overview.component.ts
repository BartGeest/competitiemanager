import { Component, OnInit } from '@angular/core';
import {MatchResultRow} from "../../../model/MatchResultRow";
import {Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-results-match-overview',
  templateUrl: './results-match-overview.component.html',
  styleUrls: ['./results-match-overview.component.css']
})
export class ResultsMatchOverviewComponent implements OnInit {

  colums: string[] = [
    'Wedstrijd',
    'Thuis',
    'Uit',
    'Gestart op',
    'Beëindigd op',
    'Uitslag'
  ];

  //TODO: goede info van back-end krijgen
  ph_match_results: MatchResultRow[] = [
    new MatchResultRow(1, 'team-kees', 'team-jan', new Date(), new Date(), '2 - 1'),
    new MatchResultRow(2, 'jemoeder', 'jevader', new Date(), new Date(), '69 - 69'),
    new MatchResultRow(3, 'dikke', 'kaas', new Date(), new Date(), '10 - 0')
  ];

  constructor(private router: Router, private path: PathService) { }

  ngOnInit(): void {
  }

  onBtnClick(): void {
    this.router.navigate([this.path.getDashboardPath]);
  }

}
