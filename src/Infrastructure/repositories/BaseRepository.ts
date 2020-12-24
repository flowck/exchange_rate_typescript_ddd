import { GeneralObject, IModelInclude } from "Infrastructure/types";

export default abstract class BaseRepository {
  private models!: any;

  constructor(models: any) {
    this.models = models;
  }

  public getModels(model: string) {
    return this.models[model];
  }

  public genInclude(
    model: any,
    as: string,
    attributes: string[],
    include?: IModelInclude,
    where?: GeneralObject
  ): IModelInclude {
    const _include = include && Object.keys(include).length ? [include] : [];
    return { as, model, attributes, include: _include, where };
  }

  public currencyModel() {
    return this.getModels("Currency");
  }

  public rateModel() {
    return this.getModels("Rate");
  }

  public rateValueModel() {
    return this.getModels("RateValue");
  }

  public get getModelOperationNot() {
    return this.models.Sequelize.Op.not;
  }

  public ok<T>(data: T): Promise<T> {
    return Promise.resolve(data);
  }

  public fail<T>(error: T): Promise<T> {
    return Promise.reject(error);
  }
}
