/**
 * User entity
 */
import Entity from "../Entity";

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export default class User extends Entity {
  private name!: string;
  private email!: string;
  private password!: string;

  constructor(user: User) {
    super();
  }

  get getEmail(): string {
    return this.email;
  }

  get getName(): string {
    return this.name;
  }
}
