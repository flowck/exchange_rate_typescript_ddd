/**
 * Rate's use cases
 * RateController will import this class and match each method to the respective
 * api route;
 */
import { IRate } from "./Rate";
import IRateRepository from "./IRateRepository";

export default class RateUseCases {
  private repository!: IRateRepository;

  constructor(repository: IRateRepository) {
    if (!repository) throw Error("Please provide a repository.");
    this.repository = repository;
  }

  private ok<T>(data: T): Promise<T> {
    return Promise.resolve(data);
  }

  private fail<T>(exception: T): Promise<T> {
    return Promise.reject(exception);
  }

  public async registRate(rate: IRate) {
    try {
      const _rate = await this.repository.save(rate);
      return this.ok(_rate);
    } catch (error) {
      return this.fail(error);
    }
  }

  public async viewRates() {
    try {
      const rates = await this.repository.getRates();
      return this.ok(rates);
    } catch (error) {
      console.log(error);
      return this.fail(error);
    }
  }

  public viewRate() {}
  public updateRate() {}
  public removeRate() {}
  public viewRatesByTimeInterval() {}
}
