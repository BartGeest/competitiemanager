export class MarketRow {
  owner: string;
  name: string;
  won: number;
  tie: number;
  lost: number;
  cost: number;

  constructor(owner: string, name: string, won: number, tie: number, lost: number, cost: number) {
    this.owner = owner;
    this.name = name;
    this.won = won;
    this.tie = tie;
    this.lost = lost;
    this.cost = cost;
  }
}
