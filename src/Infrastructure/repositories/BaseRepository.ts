export default abstract class BaseRepository {
  private models!: any;

  constructor(models: any) {
    this.models = models;
  }

  public getModels(model: string) {
    return this.models[model];
  }
}