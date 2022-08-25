import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlService} from "../url/url.service";
import {Observable} from "rxjs";
import {CompetitionResponse} from "../../model/CompetitionResponse";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(private http: HttpClient, private url: UrlService) { }

  getCompetitionsBySport(sport: string = 'FOOTBALL') : Observable<CompetitionResponse> {
    return this.http.get<CompetitionResponse>(this.url.getCompetitionsUrl + sport);
  }
}
