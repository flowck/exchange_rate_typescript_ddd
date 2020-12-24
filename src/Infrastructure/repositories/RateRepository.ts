import { IRate } from "Domain/Rate/Rate";
import BaseRepository from "./BaseRepository";
import Currency from "Domain/Currency/Currency";
import { GeneralObject, IModelInclude } from "Infrastructure/types";
import IRateRepository from "Domain/Rate/IRateRepository";
const {
  ASS_CURRENCY_RATE,
  ASS_CURRENCY_RATE_VALUE,
  ASS_RATE_RATE_VALUE,
} = require("Infrastructure/sequelize/config/constants");

export default class RateRepository extends BaseRepository implements IRateRepository {
  constructor(models: any) {
    super(models);
  }

  public async getRate() {
    try {
      const rate = await this.rateModel().findOne();
      return this.ok(rate);
    } catch (error) {
      return this.fail(error);
    }
  }

  public async getRates(defaultCurrencyCode = "USD") {
    try {
      const rateValueInclude = {} as IModelInclude;
      const rateValueCurrencyWhere = {
        code: { [this.getModelOperationNot]: defaultCurrencyCode },
      };
      const rateValueCurrencyInclude = this.genInclude(
        this.currencyModel(),
        ASS_CURRENCY_RATE_VALUE,
        ["code"],
        rateValueInclude,
        rateValueCurrencyWhere
      );

      const queryOptions = {
        attributes: ["timestamp"],
        include: [
          this.genInclude(this.currencyModel(), ASS_CURRENCY_RATE, ["code"]),
          this.genInclude(
            this.rateValueModel(),
            ASS_RATE_RATE_VALUE,
            ["value"],
            rateValueCurrencyInclude
          ),
        ],
      };

      const queryResult = await this.rateModel().findAll(queryOptions);

      // Return an empty object if queryResult is empty
      if (!queryResult && queryResult.length > 0) {
        return this.ok({});
      }

      const result = queryResult[0];
      const rates: GeneralObject = {};
      const timestamp = Math.floor(new Date(result.timestamp).getTime() / 1000);

      result.rates.forEach((rate: any) => {
        rates[rate[ASS_CURRENCY_RATE_VALUE].code] = rate.value;
      });

      const base = result[ASS_CURRENCY_RATE].code;

      return this.ok({ timestamp, base, rates });
    } catch (error) {
      return this.fail(error);
    }
  }

  public getRatesByCurrency(currency: Currency) {}
  public getRatesByCurrencyAndTimerange(
    currency: Currency,
    startDate: Date,
    endDate: Date
  ) {}

  public async save(rate: IRate): Promise<IRate> {
    try {
      const result = await this.rateModel().create(rate);
      return this.ok(result);
    } catch (error) {
      return this.fail(error);
    }
  }
}
