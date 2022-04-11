import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-signpost',
  templateUrl: './dashboard-signpost.component.html',
  styleUrls: ['./dashboard-signpost.component.css']
})
export class DashboardSignpostComponent implements OnInit {

  showInfo: boolean;

  //TODO: @Input dingen doen voor waardes in de html

  constructor() {
    this.showInfo = false;
  }

  ngOnInit(): void {
  }

  isHovering(bool: boolean) {
    this.showInfo = bool;
  }

}
