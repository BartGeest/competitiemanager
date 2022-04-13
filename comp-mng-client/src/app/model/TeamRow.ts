export class TeamRow {
  id: number;
  owner: string;
  name: string;
  wonMatches: number;
  tieMatches: number;
  lostMatches: number;

  constructor(id: number,
              owner: string,
              name: string,
              wonMatches: number,
              tieMatches: number,
              lostMatches: number
              ) {

    this.id = id;
    this.owner = owner;
    this.name = name;
    this.wonMatches = wonMatches;
    this.tieMatches = tieMatches;
    this.lostMatches = lostMatches;
  }
}
