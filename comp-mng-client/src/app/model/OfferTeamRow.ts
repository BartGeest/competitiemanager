export class OfferTeamRow {
  name: string;
  sport: string;
  competition: string;
  won: number;
  tie: number;
  lost: number;

  constructor(name: string, sport: string, competition: string, won: number, tie: number, lost: number) {
    this.name = name;
    this.sport = sport;
    this.competition = competition;
    this.won = won;
    this.tie = tie;
    this.lost = lost;
  }
}
