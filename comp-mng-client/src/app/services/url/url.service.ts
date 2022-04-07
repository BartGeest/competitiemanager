import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  /**
   * get methodes die een endpoint teruggeeft van de back-end
   */

  get auth(): string {
    return environment.url.auth;
  }
}
