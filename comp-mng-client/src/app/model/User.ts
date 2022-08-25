export class User {
  accessToken: string;
  roles: string[];

  constructor(accessToken: string, roles: string[]) {
    this.accessToken = accessToken;
    this.roles = roles;
  }

  get getUserToken(): string {
    return this.accessToken;
  }

  set setUserToken(accessToken: string) {
    this.accessToken = accessToken;
  }

  get getUserRoles(): string[] {
    return this.roles;
  }

  set setUserRoles(roles: string[]) {
    this.roles = roles;
  }
}

