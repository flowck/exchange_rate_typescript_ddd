import Controller from "./Controller"
import express, { Router } from "express";
import User, { IUser } from "Domain/Entities/User";
import selfish from "Infrastructure/utils/selfish";
const models = require("Infrastructure/sequelize/models");
import UserRepository from "Infrastructure/repositories/UserRepository";
import * as userGuards from "API/guards/users";
import { validate as guard } from "express-validation";

const router = Router();

export default class UserController extends Controller {
  public repository!: UserRepository;

  constructor() {
    super();
    this.repository = new UserRepository(models);
  }

  public getUser(request: express.Request, response: express.Response) {
    this.responseOk(response, { message: "Hello World" });
  }

  public async login(request: express.Request, response: express.Response) {
    const { email }: IUser = request.body;

    // Check email on the DB
    const user: User = await this.repository.findUserByEmail(email)

    this.responseOk(response, user);
  }
}

const controller = selfish(new UserController());

router.get("/", controller.getUser);
router.get("/login", guard(userGuards.login), controller.login);

export const userRoutes = router;