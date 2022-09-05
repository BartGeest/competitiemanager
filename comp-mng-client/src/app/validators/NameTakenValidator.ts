import {AbstractControl, AsyncValidatorFn, ValidationErrors} from "@angular/forms";
import {TeamService} from "../services/team/team.service";
import {map, Observable} from "rxjs";

export function nameTakenValidator(teamService: TeamService): AsyncValidatorFn {
  return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    return teamService.nameIsTaken(control.value)
      .pipe(map((response) => {
        return response ? { 'nameIsTaken': true } : null;
      }));
  }
}
