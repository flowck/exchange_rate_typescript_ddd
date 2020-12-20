import Currency from "Domain/Currency/Currency";
import IRateRepository from "Domain/Rate/IRateRepository";
import BaseRepository from "./BaseRepository";
import { IRate } from "Domain/Rate/Rate";
import { GeneralObject } from "Infrastructure/types";

export default class RateRepository extends BaseRepository implements IRateRepository {
  private readonly ratesModel = "rates";
  private readonly currenciesModel = "currencies";

  constructor(models: any) {
    super(models);
  }

  public async getRate() {
    try {
      const rate = await this.getModels(this.ratesModel).findOne();
      return this.ok(rate);
    } catch (error) {
      return this.fail(error);
    }
  }

  public async getRates(defaultCurrencyCode = "USD") {
    try {
      const queryOptions = {
        where: { code: defaultCurrencyCode },
        attributes: ["code"],
        include: [
          // Include rates
          {
            model: this.getModels(this.ratesModel),
            as: "rates",
            attributes: ["value", "timestamp"],
            // Include rate's currency
            include: [
              {
                model: this.getModels("currencies"),
                as: "currency",
                attributes: ["code"],
                // where: { code: { $not: defaultCurrencyCode } }
              }
            ]
          }
        ]
      };

      const queryResult = await this.getModels(this.currenciesModel).findAll(queryOptions);

      // Return an empty object if queryResult is empty
      if (!queryResult) { return this.ok({}); }

      const rates: GeneralObject = {};

      queryResult[0].rates.forEach((rate: any) => {
        rates[rate.currency.code] = rate.value;
      });

      /**
       * IMPLEMENTATION NEEDS TO BE REVIEWED
      */

      return this.ok({ base: queryResult[0].code, rates: rates });
    } catch (error) {
      return this.fail(error);
    }
  }

  public getRatesByCurrency(currency: Currency) { }
  public getRatesByCurrencyAndTimerange(currency: Currency, startDate: Date, endDate: Date) { }

  public async save(rate: IRate): Promise<IRate> {
    try {
      const result = await this.getModels(this.ratesModel).create(rate);
      return this.ok(result);
    } catch (error) {
      return this.fail(error);
    }
  }
}