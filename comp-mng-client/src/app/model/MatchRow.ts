export class MatchRow {
  id: number;
  competition: string;
  home: string;
  away: string;
  startTime: Date;

  constructor(id: number, competition: string, home: string, away: string, startTime: Date) {
    this.id = id;
    this.competition = competition;
    this.home = home;
    this.away = away;
    this.startTime = startTime;
  }
}
