export class MatchResultRow {
  matchNumber: number;
  home: string;
  away: string;
  started: Date;
  ended: Date;
  result: string;

  constructor(matchNumber: number, home: string, away: string, started: Date, ended: Date, result: string) {
    this.matchNumber = matchNumber;
    this.home = home;
    this.away = away;
    this.started = started;
    this.ended = ended;
    this.result = result;
  }
}
