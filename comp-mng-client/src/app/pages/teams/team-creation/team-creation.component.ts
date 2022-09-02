import {Component, OnInit} from '@angular/core';
import {FormControl, FormRecord} from "@angular/forms";
import {sportsDict} from "../../../model/domain/SportsDictionary";
import {TeamService} from "../../../services/team/team.service";
import {TeamCreationResponse} from "../../../model/team/TeamCreationResponse";

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  dropdownChoices: string[];
  selectedSport: string;

  sportInputs: FormRecord<FormControl<string>>;
  formKeys = ['0'];
  inputCount = 0;

  teamsResponse: TeamCreationResponse = {createdTeams: [], message: '', numberOfTeams: 0};
  showPopup: boolean = false;

  constructor(private teamService: TeamService) {
    this.dropdownChoices = Object.keys(sportsDict);
    this.selectedSport = sportsDict[this.dropdownChoices[0]];
    this.sportInputs = new FormRecord<FormControl<string>>({});
    this.sportInputs.addControl(this.formKeys[this.inputCount], new FormControl<string>('', {nonNullable: true}));
  }

  ngOnInit(): void { }

  changeSport(sport: string): void {
    this.selectedSport = sportsDict[sport];
  }

  addTeamInput(): void {
    this.inputCount++;
    let num = this.inputCount.toString();
    this.formKeys.push(num);
    this.sportInputs.addControl(this.formKeys[this.inputCount], new FormControl<string>('', {nonNullable: true}));
  }

  removeTeamInput(): void {
    this.sportInputs.removeControl(this.formKeys[this.inputCount]);
    this.formKeys.pop();
    this.inputCount--;
  }

  submitTeams(): void {
    let teams: string[] = [];

    for (let i = 0; i <= this.inputCount; i++) {
      teams.push(this.sportInputs.get(this.formKeys[i])?.value);
    }

    this.teamService.createTeam(this.selectedSport, teams)
      .subscribe((teamResponse) => {
        this.teamsResponse = teamResponse;
        this.showPopup = true;
      });
  }

  closeModal(): void {
    this.showPopup = false;
  }
}
