/**
 * Rate's use cases
 * RateController will import this class and match each method to the respective
 * api route;
 */

import RateRepository from "Infrastructure/repositories/RateRepository";
import { IRate } from "./Rate";

export default class RateUseCases {
  private repository!: RateRepository;

  constructor(models: any) {
    if (!models) throw Error("Please provide models object");
    this.repository = new RateRepository(models);
  }

  private ok<T>(data: T): Promise<T> {
    return Promise.resolve(data);
  }

  private notOk<T>(exception: T): Promise<T> {
    return Promise.reject(exception);
  }

  public async registRate(rate: IRate) {
    try {
      const _rate = await this.repository.save(rate);
      this.ok(_rate);
    } catch (error) {
      this.notOk(error);
    }
  }

  public viewRates() { }
  public viewRate() { }
  public updateRate() { }
  public removeRate() { }
  public viewRatesByTimeInterval() { }
}