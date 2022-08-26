import {Component, OnInit} from '@angular/core';
import {UntypedFormArray, UntypedFormControl, UntypedFormGroup} from "@angular/forms";
import {sportsDict} from "../../../model/domain/SportsDictionary";

@Component({
  selector: 'app-team-creation',
  templateUrl: './team-creation.component.html',
  styleUrls: ['./team-creation.component.css']
})
export class TeamCreationComponent implements OnInit {

  creationForm: UntypedFormGroup;
  dropdownChoices: string[];

  constructor() {
    this.dropdownChoices = Object.keys(sportsDict);

    //TODO: refactor want dit slaat nergens op

    this.creationForm = new UntypedFormGroup({
      teams: new UntypedFormArray([
        new UntypedFormGroup({
          sport: new UntypedFormControl(''),
          name: new UntypedFormControl('')
        })
      ])
    });
  }

  ngOnInit(): void {
    //TODO: call naar back-end - service maken
  }

  get teams(): UntypedFormArray {
    return this.creationForm.get('teams') as UntypedFormArray;
  }

  get teamsSize(): number {
    let formArray = this.creationForm.get('teams') as UntypedFormArray;
    return formArray.length;
  }

  addTeamInput() {
    if (this.teamsSize < 8) {
      this.teams.push(
        new UntypedFormGroup({
          name: new UntypedFormControl('')
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
