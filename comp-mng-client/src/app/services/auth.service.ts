import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from "rxjs";
import {URL} from "../constants/constants";
import {ACCESS_TOKEN} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(URL.API_AUTH, {username, password});
  }

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
