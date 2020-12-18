import Currency from "Domain/Entities/Currency";

export default abstract class IRateRepository {
  public getRate() { }
  public getRatesByCurrency(currency: Currency) { }
  public getRatesByCurrencyAndTimerange(currency: Currency, startDate: Date, endDate: Date) { }
}