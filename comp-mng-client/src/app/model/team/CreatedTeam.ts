export interface CreatedTeam {
  id: number;
  name: string;
  sportName: string;
  owner: any;
  canParticipate: boolean;
  wonMatches: number;
  tieMatches: number;
  lostMatches: number;
  cost: number;
}
