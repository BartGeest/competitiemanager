import { Component, OnInit } from '@angular/core';
import {FinishedCompetitionRow} from "../../../model/FinishedCompetitionRow";
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-results-comp-selection',
  templateUrl: './results-comp-selection.component.html',
  styleUrls: ['./results-comp-selection.component.css']
})
export class ResultsCompSelectionComponent implements OnInit {

  isRowClicked: boolean = false;

  comp_columns: string[] = [
    'naam',
    '# wedstrijden',
    'gestart op',
    'beëindigd op'
  ];

  ph_fin_comps: FinishedCompetitionRow[] = [
    new FinishedCompetitionRow('dikke', 36, new Date(), new Date()),
    new FinishedCompetitionRow('harde', 69, new Date(), new Date()),
    new FinishedCompetitionRow('kaas', 88, new Date(), new Date())
  ];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
  }

  onRowClick(): void {
    console.log('JE DIKKE MOEDER');
    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

  navToMatchResults(): void {
    this.router.navigate([this.path.getMatchResultsPath], {relativeTo: this.route})
  }

}
