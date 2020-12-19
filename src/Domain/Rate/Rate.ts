import Entity from "Domain/Entity";
import Currency from "Domain/Currency/Currency";

export interface IRate {
  baseCurrenciesId: string;
  equivalentCurrenciesId: string;
  value: number;
  timestamp: Date;
}

export default class Rate extends Entity {
  private baseCurrenciesId!: string;
  private equivalentCurrenciesId!: string;
  private timestamp!: Date;
  private value!: number;

  constructor(baseCurrenciesId: string, equivalentCurrenciesId: string, value: number) {
    super();
    this.baseCurrenciesId = baseCurrenciesId;
    this.equivalentCurrenciesId = equivalentCurrenciesId;
    this.value = value;
  }

  get getTimestamp(): Date {
    return new Date();
  }

  create(): IRate {
    return {
      baseCurrenciesId: this.baseCurrenciesId,
      equivalentCurrenciesId: this.equivalentCurrenciesId,
      value: this.value,
      timestamp: this.getTimestamp
    }
  }
}