import {Component, Input, OnInit} from '@angular/core';
import {NavigationService} from "../../services/nav/navigation.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-nav-card',
  templateUrl: './nav-card.component.html',
  styleUrls: ['./nav-card.component.css']
})
export class NavCardComponent implements OnInit {

  @Input() cardTitle: string = '';

  @Input() cardText: string = '';

  @Input() navPath: string = '';

  @Input() isRelativePath: boolean = false;

  constructor(private navigation: NavigationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCardClick(): void {
    this.navigation.navToPage(this.isRelativePath, this.router, this.route, this.navPath);
  }

}
