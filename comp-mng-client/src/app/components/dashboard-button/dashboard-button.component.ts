import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {

  @Input() buttonName: string;

  @Input() navPath: string;

  constructor() {
    this.buttonName = '';
    this.navPath = '';
  }

  ngOnInit(): void {
  }

}
