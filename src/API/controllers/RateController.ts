import Rate from "Domain/Rate/Rate";
import Controller from "./Controller"
import { Request, Response } from "express";
import RateUseCases from "Domain/Rate/RateUseCases";
const models = require("Infrastructure/sequelize/models");

export default class RateController extends Controller {
  public rateUseCases!: RateUseCases;

  constructor() {
    super();
    this.rateUseCases = new RateUseCases(models);
  }

  public async getRates(req: Request, res: Response) {
    const rates = await this.rateUseCases.viewRates();
    this.responseOk(res, rates);
  }

  public async registRate(req: Request, res: Response) {
    const { baseCurrenciesId, equivalentCurrenciesId, value } = req.body;
    const rate = new Rate(baseCurrenciesId, equivalentCurrenciesId, value).create();
    const result = await this.rateUseCases.registRate(rate);
    this.responseOk(res, result);
  }
}