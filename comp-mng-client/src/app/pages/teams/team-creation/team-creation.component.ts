import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormBuilder} from "@angular/forms";
import {SPORTS} from "../../../constants/constants";

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  creationForm: FormGroup;
  dropdownChoices: string[];

  constructor() {
    this.dropdownChoices = [
      SPORTS.football,
      SPORTS.rugby,
      SPORTS.basketball,
      SPORTS.baseball,
      SPORTS.volleyball
    ];

    this.creationForm = new FormGroup({
      teams: new FormArray([
        new FormGroup({
          sport: new FormControl(''),
          name: new FormControl('')
        })
      ])
    });
  }

  ngOnInit(): void {
    //TODO: call naar back-end - service maken
  }

  get teams(): FormArray {
    return this.creationForm.get('teams') as FormArray;
  }

  get teamsSize(): number {
    let formArray = this.creationForm.get('teams') as FormArray;
    return formArray.length;
  }

  addTeamInput() {
    if (this.teamsSize < 8) {
      this.teams.push(
        new FormGroup({
          name: new FormControl('')
        })
      );
    }
  }

  removeTeamInput() {
    this.teams.controls.pop();
  }

  submitTeams(): void {
    console.log('Inside submitTeams');
  }
}
