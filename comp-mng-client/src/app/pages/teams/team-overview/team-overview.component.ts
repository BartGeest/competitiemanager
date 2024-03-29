import { Component, OnInit } from '@angular/core';
import {PathService} from "../../../services/path/path.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Team} from "../../../model/team/Team";
import {TeamService} from "../../../services/team/team.service";

@Component({
  selector: 'app-team-overview',
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.css']
})
export class TeamOverviewComponent implements OnInit {

  team_columns: string[] = [
    'id',
    'naam',
    'beschikbaar',
    'gewonnen',
    'gelijk',
    'verloren'
  ];

  teams: Team[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private path: PathService,
    private teamService: TeamService) { }

  ngOnInit(): void {
    this.route.data.subscribe( ({teamsResponse}) => {
      this.teams = teamsResponse.teams;
    });
  }

  changeSport(sportname: string): void {
    this.retrieveTeams(sportname);
  }

  retrieveTeams(sportname: string): void {
    this.teamService.getTeamsBySport(sportname)
      .subscribe((teamsResponse) => {
        this.teams = teamsResponse.teams;
      });
  }

  navToTeamCreation(): void {
    this.router.navigate([this.path.getTeamsCreationPath], {relativeTo: this.route});
  }

}
