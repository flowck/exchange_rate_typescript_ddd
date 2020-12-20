export default abstract class BaseRepository {
  private models!: any;

  constructor(models: any) {
    this.models = models;
  }

  public getModels(model: string) {
    return this.models[model];
  }

  public ok<T>(data: T): Promise<T> {
    return Promise.resolve(data);
  }

  public fail<T>(error: T): Promise<T> {
    return Promise.resolve(error);
  }
}