import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../services/path/path.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
    //TODO: call naar backend - service maken voor teams
  }

  navToTeamCreation(): void {
    console.log(this.route);
    this.router.navigate([this.path.getTeamsCreationPath], {relativeTo: this.route});
  }

}
