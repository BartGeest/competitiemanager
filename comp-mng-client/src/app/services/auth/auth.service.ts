import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable} from "rxjs";
import {ACCESS_TOKEN} from "../../constants/constants";
import {UrlService} from "../url/url.service";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;

  constructor(private http: HttpClient, private url: UrlService) {
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem(ACCESS_TOKEN) || '{}');
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<any>(this.url.getAuthUrl, {username, password})
      .pipe(map(user => {
        localStorage.setItem(ACCESS_TOKEN, user)
        this.currentUserSubject.next(user)
      }));
  }

  get getCurrentUser(): string {
    return this.currentUserSubject.value;
  }

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
