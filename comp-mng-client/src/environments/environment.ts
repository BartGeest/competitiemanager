// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: {
    auth: 'http://localhost:8080/api/auth/login',
    register: 'http://localhost:8080/api/auth/register'
    //TODO: de andere endpoints toevoegen
  },
  path: {
    home: '',
    dashboard: '/dashboard',
    competition: '/competitie',
    teams: '/teams',
    forecasts: '/voorspellingen',
    results: '/resultaten',
    market: '/markt',
    leaderboard: '/leaderboard',
    manual: '/speluitleg',
    change: '/wachtwoord/wijzigen',
    logout: ''
    //TODO: de andere client paths toevoegen/aanpassen
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
