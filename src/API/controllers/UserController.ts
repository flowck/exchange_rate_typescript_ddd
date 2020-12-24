import Controller from "./BaseController";
import { Request, Response } from "express";
import User, { IUser } from "Domain/User/User";
const models = require("Infrastructure/sequelize/models");
import UserRepository from "Infrastructure/repositories/UserRepository";

export default class UserController extends Controller {
  public repository!: UserRepository;

  constructor() {
    super();
    this.repository = new UserRepository(models);
  }

  public getUser(request: Request, response: Response) {
    this.responseOk(response, { message: "Hello World" });
  }

  public async login(request: Request, response: Response) {
    const { email }: IUser = request.body;

    // Check email on the DB
    const user: User = await this.repository.findUserByEmail(email);

    this.responseOk(response, user);
  }
}
