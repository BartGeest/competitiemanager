import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, firstValueFrom, map, Observable} from "rxjs";
import {ACCESS_TOKEN} from "../../constants/constants";
import {UrlService} from "../url/url.service";
import {User} from "../../model/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  private user: User = new User('', []);

  constructor(private http: HttpClient, private url: UrlService) {
    this.currentUserSubject = new BehaviorSubject<User>(this.user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.http.post<User>(this.url.getAuthUrl, {username, password})
      .pipe(map(response => {
        localStorage.setItem(ACCESS_TOKEN, response.token)

        this.user.setUserToken = response.token;
        this.user.setUserRoles = response.roles;

        this.currentUserSubject.next(this.user); //nodig voor auth.guard
        return this.user;
      }));
  }

  get getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  logout() {
    sessionStorage.removeItem(ACCESS_TOKEN);
  }
}
