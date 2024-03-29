// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: {
    auth: 'http://localhost:8080/api/auth/login',
    register: 'http://localhost:8080/api/auth/register',
    competition: {
      retrieve: 'http://localhost:8080/api/competition/get_competitions/',
      participate: 'http://localhost:8080/api/competition/participate',
      single: 'http://localhost:8080/api/competition/get_single/'
    },
    team: {
      overview: 'http://localhost:8080/api/team/get/teams/',
      playable: 'http://localhost:8080/api/team/get/playable/',
      creation: 'http://localhost:8080/api/team/create',
      nameCheck: 'http://localhost:8080/api/team/check/'
    }
  },
  path: {
    home: '',
    dashboard: {
      user: 'user-dashboard',
      admin: 'admin-dashboard',
    },
    competition: {
      overview: '/competities',
      participate: 'meedoen'
    },
    teams: {
      overview: '/teams', //de 'eerste' pagina heeft een forward slash nodig, anders kan die hem niet vinden
      creation: 'aanmaken' //pagina's die relative zijn hebben dat dus juist weer niet nodig...
    },
    forecasts: {
      overview: '/voorspellingen',
      creation: 'doen'
    },
    results: {
      selection: '/resultaten',
      matches: 'wedstrijden'
    },
    market: {
      overview: '/markt',
      offer: 'aanbieden'
    },
    leaderboard: '/leaderboard',
    manual: {
      overview: '/speluitleg',
      general: 'algemeen',
      competition: 'competities',
      teams: 'teams',
      forecast: 'voorspellen',
      market: 'markt'
    },
    change: '/wachtwoord/wijzigen',
    register: '/registreren',
    delete: '/verwijderen',
    logout: ''
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
