import Rate from "Domain/Rate/Rate";
import Controller from "../BaseController";
import { Request, Response } from "express";
import RateUseCases from "Domain/Rate/RateUseCases";
const models = require("Infrastructure/sequelize/models");
import RateRepository from "Infrastructure/repositories/RateRepository";

export default class RateController extends Controller {
  public rateUseCases!: RateUseCases;

  constructor() {
    super();
    this.rateUseCases = new RateUseCases(new RateRepository(models));
  }

  public async getRates(req: Request, res: Response) {
    try {
      const rates = await this.rateUseCases.viewRates();
      this.responseOk(res, rates);
    } catch (error) {
      this.response500(res);
    }
  }

  public async registRate(req: Request, res: Response) {
    try {
      const { baseCurrenciesId, equivalentCurrenciesId, value } = req.body;
      const rate = new Rate(baseCurrenciesId, equivalentCurrenciesId, value).create();
      const result = await this.rateUseCases.registRate(rate);
      this.responseOk(res, result);
    } catch {
      this.response500(res);
    }
  }
}
