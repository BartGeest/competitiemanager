import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
import {sportsDict} from "../../../model/domain/SportsDictionary";

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  creationForm: FormGroup;
  dropdownChoices: string[];

  constructor() {
    this.dropdownChoices = Object.keys(sportsDict);

    //TODO: refactor want dit slaat nergens op

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

    console.log('teams FormArray', this.teams);

    console.log(this.creationForm);
    //TODO: de form controls omzetten naar een ander object?

    //TODO: team service aanroepen voor post naar back-end
  }
}
