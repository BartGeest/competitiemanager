export class CompetitionRow {
  id: number;
  name: string;
  contenderAmount: number;
  maxContenderAmount: number;
  startsOver: Date;

  constructor(id: number, name: string, contenderAmount: number, maxContenderAmount: number, startsAt: Date) {
    this.id = id;
    this.name = name;
    this.contenderAmount = contenderAmount;
    this.maxContenderAmount = maxContenderAmount;
    this.startsOver = startsAt;
  }
}
