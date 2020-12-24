export default abstract class Entity {
  private id!: string;

  get getId(): string {
    return this.id;
  }
}
