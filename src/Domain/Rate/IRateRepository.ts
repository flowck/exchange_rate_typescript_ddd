/**
 * Repository interfaces to be implemented in infrastructure
 */

import Currency from "Domain/Currency/Currency";

export default abstract class IRateRepository {
  public getRate() {}
  public getRatesByCurrency(currency: Currency) {}
  public getRatesByCurrencyAndTimerange(currency: Currency, startDate: Date, endDate: Date) {}
}
