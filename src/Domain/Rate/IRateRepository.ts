/**
 * Repository interfaces to be implemented in infrastructure
 */

import Currency from "Domain/Currency/Currency";
import { IRate } from "./Rate";

export default abstract class IRateRepository {
  public save(rate: IRate) {}
  public getRates() {}
  public getRate() {}
  public getRatesByCurrency(currency: Currency) {}
  public getRatesByCurrencyAndTimerange(currency: Currency, startDate: Date, endDate: Date) {}
}
