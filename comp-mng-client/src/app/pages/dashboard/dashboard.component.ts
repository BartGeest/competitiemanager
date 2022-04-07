import { Component, OnInit } from '@angular/core';
import {PathService} from "../../services/path/path.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private path: PathService) { }

  competitie: string = 'Competitie';
  competitiepad: string = '../competitie';

  ngOnInit(): void {

  }

}
