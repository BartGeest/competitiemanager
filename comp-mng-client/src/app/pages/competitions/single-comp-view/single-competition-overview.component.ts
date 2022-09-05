import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompetitionService} from "../../../services/competition/competition.service";
import {TeamInComp} from "../../../model/team/TeamInComp";

@Component({
  selector: 'app-competition-participate',
  templateUrl: './single-competition-overview.component.html',
  styleUrls: ['./single-competition-overview.component.css']
})
export class SingleCompetitionOverview implements OnInit {

  competitionId: number;
  competitionName: string = '';

  team_columns: string[] = [
    'id',
    'eigenaar',
    'naam',
    'gewonnen',
    'gelijk',
    'verloren'
  ];

  teams: TeamInComp[] = [];

  constructor(private route: ActivatedRoute, private compService: CompetitionService) {
    this.competitionId = parseInt(<string>route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.compService.getSingleCompetition(this.competitionId)
      .subscribe((response) => {
        console.log(response);
        this.competitionName = response.name;
        this.teams = response.teams;
      });
  }

}
