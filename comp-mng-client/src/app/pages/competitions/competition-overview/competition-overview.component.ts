import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PathService} from "../../../services/path/path.service";
import {Competition} from "../../../model/Competition";

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

  competitions: Competition[] = [];

  constructor(private router: Router, private route: ActivatedRoute, private path: PathService) {}

  ngOnInit(): void {
    //door gebruik te maken van een resolver is er data op te halen vanuit de ActivatedRoute
    //HEEL BELANGRIJK in de subscribe moet je wel de key gebruiken die in de resolver staat bij de route in app.module.ts
    this.route.data.subscribe(({competitionResponse}) => {
      console.log(competitionResponse);
      this.competitions = competitionResponse.competitions;
    })
  }

  navToCompParticipate(): void {
    //TODO: andere methode aanroepen wanneer er een row is geklikt (dus vanuit de emit in interactive table)
    // methode zorgt voor een popup met de vraag of je het zeker weet of je aan deze competitie mee wilt doen
    // vanuit de popup (modal; zie clarity site) de navigate aanroepen,
    this.router.navigate([this.path.getCompetitionParticipationPath], {relativeTo: this.route});
  }

  onRowClick(): void {
    this.toggleRowClicked();
  }

  toggleRowClicked(): void {
    this.isRowClicked = !this.isRowClicked;
  }

}
