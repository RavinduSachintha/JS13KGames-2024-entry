export class BaseElement<T extends SVGElement> {
  protected _instance!: T;

  get instance(): T {
    return this._instance;
  }

  create(): void {}

  handleOnClickEvent(handlerFunc: () => any): void {
    this._instance.addEventListener("click", handlerFunc);
  }
}
