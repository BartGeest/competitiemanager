import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.css']
})
export class ForecastOverviewComponent implements OnInit {

  isRowClicked: boolean = false

  row_headers: string[] = [
    'Sport',
    'Competitie',
    'Thuis',
    'Uit',
    'Start over',
    'Voorspelling'
  ];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
  }

  randoMethod() {
    //TODO: nog de methode anders noemen en iets anders doen dan alleen dit?
    this.isRowClicked = !this.isRowClicked;
  }

  navToForecastCreation() {
    this.router.navigate([this.path.getForecastCreationPath], {relativeTo: this.route});
  }

}
