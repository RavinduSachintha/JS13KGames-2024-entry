/**
 * Base SVG element class
 */
export class BaseElement<T extends SVGElement> {
  // SVG element instance
  protected _i!: T;

  get instance(): T {
    return this._i;
  }

  // SVG element creation
  create(): void {}

  // click event handler for SVG element
  hdlClickEv(handlerFunc: () => any): void {
    this._i.addEventListener("click", handlerFunc);
  }
}
