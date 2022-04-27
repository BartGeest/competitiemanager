export class LeaderboardRow {
  user: string;
  numTeams: number;
  totalWon: number;
  totalTie: number;
  totalLost: number;
  points: number;

  constructor(user: string, numTeams: number, totalWon: number, totalTie: number, totalLost: number, points: number) {
    this.user = user;
    this.numTeams = numTeams;
    this.totalWon = totalWon;
    this.totalTie = totalTie;
    this.totalLost = totalLost;
    this.points = points;
  }
}
