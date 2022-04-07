import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs";
import {ACCESS_TOKEN} from "../../constants/constants";
import {UrlService} from "../url/url.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private url: UrlService) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.url.getAuthUrl, {username, password});
  }

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
