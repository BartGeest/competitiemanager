export class MatchRow {
  id: number;
  home: string;
  away: string;
  startTime: Date;

  constructor(id: number, home: string, away: string, startTime: Date) {
    this.id = id;
    this.home = home;
    this.away = away;
    this.startTime = startTime;
  }
}
