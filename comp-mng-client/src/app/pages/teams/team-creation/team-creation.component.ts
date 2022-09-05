import {Component, OnInit} from '@angular/core';
import {FormControl, FormRecord, Validators} from "@angular/forms";
import {sportsDict} from "../../../model/domain/SportsDictionary";
import {TeamService} from "../../../services/team/team.service";
import {TeamCreationResponse} from "../../../model/team/TeamCreationResponse";
import {ToastrService} from "ngx-toastr";
import {nameTakenValidator} from "../../../validators/NameTakenValidator";

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  dropdownChoices: string[];
  selectedSport: string;

  sportInputs: FormRecord<FormControl<string | null>>;
  formKeys = ['0'];
  inputCount = 0;

  teamsResponse: TeamCreationResponse = {createdTeams: [], message: '', numberOfTeams: 0};

  constructor(private teamService: TeamService, private toastr: ToastrService) {
    this.dropdownChoices = Object.keys(sportsDict);
    this.selectedSport = sportsDict[this.dropdownChoices[0]];
    this.sportInputs = new FormRecord<FormControl<string>>({});
    this.sportInputs.addControl(this.formKeys[this.inputCount], new FormControl<string>('', Validators.required, nameTakenValidator(this.teamService)));
  }

  ngOnInit(): void { }

  changeSport(sport: string): void {
    this.selectedSport = sportsDict[sport];
  }

  addTeamInput(): void {
    this.inputCount++;
    let num = this.inputCount.toString();
    this.formKeys.push(num);
    this.sportInputs.addControl(this.formKeys[this.inputCount], new FormControl<string>('', Validators.required, nameTakenValidator(this.teamService)));
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
        this.toastr.success('Je team(s) is (zijn) aangemaakt!', 'Succes');
      });
  }
}
