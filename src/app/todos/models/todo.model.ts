export class Todo {
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(text: string) {
    this.texto = text;

    this.id = Math.random();

    this.completado = false;
  }
}
