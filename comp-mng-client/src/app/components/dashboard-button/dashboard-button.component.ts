import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-dashboard-button',
  templateUrl: './dashboard-button.component.html',
  styleUrls: ['./dashboard-button.component.css']
})
export class DashboardButtonComponent implements OnInit {

  constructor() { }

  @Input() buttonName: string | undefined;

  @Input() navPath: string | undefined;

  ngOnInit(): void {
  }

}
