import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {

  @Input() buttonName: string;

  @Input() navPath: string;

  showInfo: boolean;

  constructor() {
    this.buttonName = '';
    this.navPath = '';
    this.showInfo = false;
  }

  ngOnInit(): void {
  }

  isHovering(bool: boolean) {
    this.showInfo = bool;
  }

}
