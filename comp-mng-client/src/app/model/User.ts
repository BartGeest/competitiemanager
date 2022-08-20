export class User {
  token: string;
  roles: string[];

  constructor(token: string, roles: string[]) {
    this.token = token;
    this.roles = roles;
  }

  get getUserToken(): string {
    return this.token;
  }

  set setUserToken(token: string) {
    this.token = token;
  }

  get getUserRoles(): string[] {
    return this.roles;
  }

  set setUserRoles(roles: string[]) {
    this.roles = roles;
  }
}

