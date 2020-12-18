import Entity from "./Entity";
import Currency from "./Currency";

export interface IRate {
  countryCode: string;
  value: number;
}

export default class Rate extends Entity {
  private base!: Currency;
  private code!: string;
  private timestamp!: Date;
  private rates!: IRate[];

  constructor(base: Currency, code: string, timestamp: Date, rates: IRate[]) {
    super();
    this.base = base;
    this.code = code;
    this.timestamp = timestamp;
    this.rates = rates;
  }

  get getTimestamp(): number {
    return new Date(this.timestamp).getTime();
  }
}