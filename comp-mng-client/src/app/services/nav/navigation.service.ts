import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }

  navToPage(isRelative: boolean, router: Router, route: ActivatedRoute, path: string): void {
    isRelative ?
      router.navigate([path], {relativeTo: route}) :
      router.navigate([path]);
  }
}
