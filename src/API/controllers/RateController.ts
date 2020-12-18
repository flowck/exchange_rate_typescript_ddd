import Controller from "./Controller"
import express, { Router } from "express";
import Rate from "Domain/Entities/Rate";
import selfish from "Infrastructure/utils/selfish";
const models = require("Infrastructure/sequelize/models");
import RateRepository from "Infrastructure/repositories/RateRepository";
// import * as userGuards from "API/guards/users";
// import { validate as guard } from "express-validation";

const router = Router();

export default class RateController extends Controller {
  public repository!: RateRepository;

  constructor() {
    super();
    this.repository = new RateRepository(models);
  }

  public getRates(request: express.Request, response: express.Response) {
    this.responseOk(response, { message: "Hello World" });
  }
}

const controller = selfish(new RateController());

router.get("/", controller.getRates);

export const ratesRoutes = router;