import {Component, OnInit} from '@angular/core';
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

  constructor(private router: Router, private path: PathService) { }

  ngOnInit(): void {
  }

  onBtnClick(): void {
    this.router.navigate([this.path.getUserDashboardPath]);
  }

}
