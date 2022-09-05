import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";
import {Competition} from "../../../model/competition/Competition";
import {CompetitionService} from "../../../services/competition/competition.service";
import {Team} from "../../../model/team/Team";
import {TeamService} from "../../../services/team/team.service";
import {sportsDict} from "../../../model/domain/SportsDictionary";
import {LABELS, TEXTS, TITLES} from "../../../constants/constants";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-compeition-overview',
  templateUrl: './competition-overview.component.html',
  styleUrls: ['./competition-overview.component.css']
})
export class CompetitionOverviewComponent implements OnInit {

  comp_columns: string[] = [
    'id',
    'naam',
    '# deelnemers',
  ];

  isRowClicked: boolean = false;

  popupTitle: string = TITLES.popup.participate;
  popupText: string = TEXTS.popup.participate;
  popupAbl: string = LABELS.action.add;

  competitions: Competition[] = [];
  selectedCompetition: Competition | undefined;
  teams: Team[] = [];
  teamSelection: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private path: PathService,
    private compService: CompetitionService,
    private teamService: TeamService,
    private toastr: ToastrService) {}

  ngOnInit(): void {
    /**
     * Door gebruik te maken van een resolver is er data op te halen vanuit de ActivatedRoute
     * Het is heel belangrijk om in de subscribe de key te gebruiken die in de resolver staat
     * De resolver is gedefinieërd in app.module.ts
     */

    this.route.data.subscribe(({competitionResponse}) => {
      this.competitions = competitionResponse.competitions;
    });

    this.retrieveTeams(sportsDict['Voetbal']);
  }

  retrieveCompetitions(sportname: string) {
    this.compService.getCompetitionsBySport(sportname)
      .subscribe( (competitionResponse) => {
        this.competitions = competitionResponse.competitions;
    });
  }

  retrieveTeams(sportname: string): void {
    this.teamService.getTeamsBySport(sportname)
      .subscribe((teamsResponse) => {
        this.teamSelection.splice(0);
        this.teams = teamsResponse.teams;
        teamsResponse.teams.forEach(n => this.teamSelection.push(n.name))
      });
  }

  changeSport(sportname: string): void {
    this.retrieveCompetitions(sportname);
    this.retrieveTeams(sportname);
  }

  handleAddition(teamName: string): void {

    let teamId = this.teams.find(n => n.name === teamName)?.id;
    let competitionId = this.selectedCompetition?.id;

    if (!teamId) {
      this.toastr.error('Er is geen team gekozen', 'Error');
      return;
    }

    if (!competitionId) {
      this.toastr.error('Er is iets fout gegaan, probeer het nog eens', 'Error');
      return;
    }

    //TODO: in de back-end ervoor zorgen dat de canParticipate van een team op false komt te staan
    // teams die worden opgehaald moeten wel canParticipate op true hebben staan

    this.compService.addTeamToCompetition(competitionId, teamId)
      .subscribe((particpationResponse) => {
        console.log(particpationResponse);
        this.toggleRowClicked();
        this.toastr.success(
          'Jouw team '
          + particpationResponse.participationDTO.teamName
          + ' is toegoevoegd aan competitie '
          + particpationResponse.participationDTO.competitionName)
          .onHidden.subscribe(() => {
            this.router.navigate([this.path.getCompetitionParticipationPath], {relativeTo: this.route});
        });
      });
  }

  onRowClick(rowInfo: Competition): void {
    this.selectedCompetition = rowInfo;

    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
