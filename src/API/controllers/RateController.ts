import Rate from "Domain/Rate/Rate";
import Controller from "./Controller"
import { Request, Response } from "express";
const models = require("Infrastructure/sequelize/models");
import RateRepository from "Infrastructure/repositories/RateRepository";
import RateUseCases from "Domain/Rate/RateUseCases";

export default class RateController extends Controller {
  public repository!: RateRepository;
  public rateUseCases!: RateUseCases;

  constructor() {
    super();
    this.rateUseCases = new RateUseCases(models);
  }

  public async getRates(req: Request, res: Response) {
    // const rates = await this.repository.getRate();
    this.responseOk(res, {});
  }

  public async registRate(req: Request, res: Response) {
    const { baseCurrenciesId, equivalentCurrenciesId, value } = req.body;
    const rate = new Rate(baseCurrenciesId, equivalentCurrenciesId, value).create();
    const result = this.rateUseCases.registRate(rate);
    this.responseOk(res, result);
  }
}