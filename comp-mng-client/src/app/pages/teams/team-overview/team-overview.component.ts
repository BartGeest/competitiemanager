import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../services/path/path.service";
import {ActivatedRoute, Router} from "@angular/router";
import {TeamOverviewRow} from "../../../model/TeamOverviewRow";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  team_columns: string[] = [
    'Naam',
    'Competitie',
    'Gewonnen',
    'Gelijk',
    'Verloren'
  ];

  //placeholder data
  ph_teams: TeamOverviewRow[] = [
    new TeamOverviewRow('Team #1', 'Comp #1', 5,5,5),
    new TeamOverviewRow('Team #2', 'Comp #2', 5,5,5),
    new TeamOverviewRow('Team #3', 'Comp #3', 5,5,5),
    new TeamOverviewRow('Team #4', 'Comp #4', 5,5,5)
  ];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) { }

  ngOnInit(): void {
    //TODO: call naar backend - service maken voor teams
  }

  navToTeamCreation(): void {
    this.router.navigate([this.path.getTeamsCreationPath], {relativeTo: this.route});
  }

}
