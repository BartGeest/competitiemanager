export class FinishedCompetitionRow {
  name: string;
  numberMatches: number;
  started: Date;
  ended: Date;

  constructor(name: string, numberMatches: number, started: Date, ended: Date) {
    this.name = name;
    this.numberMatches = numberMatches;
    this.started = started;
    this.ended = ended;
  }
}
