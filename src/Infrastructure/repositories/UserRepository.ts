import User from "Domain/User/User";
import IUserRepository from "Domain/User/IUserRepository";

export default class UserRepository implements IUserRepository {
  private models: any;

  constructor(models: any) {
    this.models = models;
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user: User = await this.models.Users.findOne({ where: { email } });
      return Promise.resolve(user);
    } catch (exception) {
      return Promise.reject(exception);
    }
  }
}