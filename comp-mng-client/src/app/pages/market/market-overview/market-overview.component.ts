import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";

@Component({
  selector: 'app-market-overview',
  templateUrl: './market-overview.component.html',
  styleUrls: ['./market-overview.component.css']
})
export class MarketOverviewComponent implements OnInit {

  isRowClicked: boolean = false;

  market_columns: string[] = [
    'Eigenaar',
    'Team naam',
    'Gewonnen',
    'Gelijk',
    'Verloren',
    'Prijs'
  ];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
  }

  onRowClick(): void {
    console.log('Je moeder kopen');
    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

  onAanbodClick(): void {
    this.router.navigate([this.path.getOfferCreationPath], {relativeTo: this.route});
  }

}
