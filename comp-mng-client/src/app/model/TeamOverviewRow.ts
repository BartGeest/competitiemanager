export class TeamOverviewRow {
  name: string;
  competition: string;
  totalWonMatches: number;
  totalTieMatches: number;
  totalLostMatches: number;

  constructor(name: string,
              competition: string,
              totalWonMatches: number,
              totalTieMatches: number,
              totalLostMatches: number
              ) {
    this.name = name;
    this.competition = competition;
    this.totalWonMatches = totalWonMatches;
    this.totalTieMatches = totalTieMatches;
    this.totalLostMatches = totalLostMatches;
  }
}
