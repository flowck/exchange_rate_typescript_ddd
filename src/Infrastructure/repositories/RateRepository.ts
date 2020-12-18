import Currency from "Domain/Entities/Currency";
import IRateRepository from "Domain/Repositories/IRateRepository";
import BaseRepository from "./BaseRepository";
import Rate from "Domain/Entities/Rate";

export default class RateRepository extends BaseRepository implements IRateRepository {
  private readonly model = "Rates";

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
}