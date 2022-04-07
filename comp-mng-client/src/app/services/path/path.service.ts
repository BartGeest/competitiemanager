import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PathService {

  constructor() { }

  /**
   * get methodes die een (absolute) client path teruggeeft
   */

  get getDashboardPath(): string {
    return environment.path.dashboard;
  }

}
