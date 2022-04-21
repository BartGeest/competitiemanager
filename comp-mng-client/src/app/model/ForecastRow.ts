export class ForecastRow {
  sport: string;
  competition: string;
  home: string;
  away: string;
  startsIn: Date;
  bet: string;

  constructor(sport: string, competition: string, home: string, away: string, startsIn: Date, bet: string) {
    this.sport = sport;
    this.competition = competition;
    this.home = home;
    this.away = away;
    this.startsIn = startsIn;
    this.bet = bet;
  }
}
