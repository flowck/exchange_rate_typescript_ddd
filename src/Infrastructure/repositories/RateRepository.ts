import Currency from "Domain/Currency/Currency";
import IRateRepository from "Domain/Rate/IRateRepository";
import BaseRepository from "./BaseRepository";
import { IRate } from "Domain/Rate/Rate";

export default class RateRepository extends BaseRepository implements IRateRepository {
  private readonly model = "rates";

  constructor(models: any) {
    super(models);
  }

  public async getRate() {
    try {
      const rate = await this.getModels(this.model).findOne();
      return Promise.resolve(rate);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  public getRatesByCurrency(currency: Currency) { }
  public getRatesByCurrencyAndTimerange(currency: Currency, startDate: Date, endDate: Date) { }

  public async save(rate: IRate): Promise<IRate> {
    try {
      const result = await this.getModels(this.model).create(rate);
      return Promise.resolve(result);
    } catch (error) {
      return Promise.reject(error);
    }
  }
}