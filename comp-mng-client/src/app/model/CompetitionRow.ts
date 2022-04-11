export class CompetitionRow {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _contenderAmount: number;
  private readonly _maxContenderAmount: number;
  private readonly _startsAt: Date;

  constructor(id: number, name: string, contenderAmount: number, maxContenderAmount: number, startsAt: Date) {
    this._id = id;
    this._name = name;
    this._contenderAmount = contenderAmount;
    this._maxContenderAmount = maxContenderAmount;
    this._startsAt = startsAt;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get contenderAmount(): number {
    return this._contenderAmount;
  }

  get maxContenderAmount(): number {
    return this._maxContenderAmount;
  }

  get startsAt(): Date {
    return this._startsAt;
  }
}
