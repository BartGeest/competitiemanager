export class TeamRow {
  id: number;
  owner: string;
  name: string;
  sport: string;
  competition?: string;
  wonMatches?: number;
  tieMatches?: number;
  lostMatches?: number;
  price?: number;

  constructor(id: number,
              owner: string,
              name: string,
              sport: string,
              competition?: string,
              wonMatches?: number,
              tieMatches?: number,
              lostMatches?: number,
              price?: number) {
    
    this.id = id;
    this.owner = owner;
    this.name = name;
    this.sport = sport;
    this.competition = competition;
    this.wonMatches = wonMatches;
    this.tieMatches = tieMatches;
    this.lostMatches = lostMatches;
    this.price = price;
  }
}
