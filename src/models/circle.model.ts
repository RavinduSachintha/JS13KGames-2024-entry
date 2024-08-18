import { Constants } from "../core/contants";
import { BaseElement } from "./base-element.model";

/**
 * Class for circle SVG element
 */
export class Circle extends BaseElement<SVGCircleElement> {
  constructor(
    // circle radius
    public r: number,
    // circle x coordination
    public x: number,
    // circle y coordination
    public y: number,
    // circle color
    public c: string
  ) {
    super();
  }

  override create(): void {
    this._i = document.createElementNS(
      Constants.svgNS,
      Constants.svgTC
    ) as SVGCircleElement;
    this._i.cx.baseVal.value = this.x;
    this._i.cy.baseVal.value = this.y;
    this._i.r.baseVal.value = this.r;
    this._i.style.fill = this.c;

    this.hdlClickEv(() => {
      console.log(`Circle at (${this.x}, ${this.y}) clicked!`);
    });
  }
}
