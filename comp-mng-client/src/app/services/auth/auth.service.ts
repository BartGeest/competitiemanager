import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, firstValueFrom, map, Observable} from "rxjs";
import {ACCESS_TOKEN} from "../../constants/constants";
import {UrlService} from "../url/url.service";
import {User} from "../../model/domain/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private url: UrlService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<User>(this.url.getAuthUrl, {username, password})
      .pipe(map(user => {
        localStorage.setItem('currentUser', JSON.stringify(user))
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  get getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
