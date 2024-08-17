import { Constants } from "../core/contants";
import { BaseElement } from "./base-element.model";

export class Circle extends BaseElement<SVGCircleElement> {
  constructor(
    public radius: number,
    public x: number,
    public y: number,
    public color: string
  ) {
    super();
  }

  override create(): void {
    this._instance = document.createElementNS(
      Constants.nameSpaceURI,
      Constants.svgElementTypeCircle
    ) as SVGCircleElement;
    this._instance.cx.baseVal.value = this.x;
    this._instance.cy.baseVal.value = this.y;
    this._instance.r.baseVal.value = this.radius;
    this._instance.style.fill = this.color;

    this.handleOnClickEvent(() => {
      console.log(`Circle at (${this.x}, ${this.y}) clicked!`);
    });
  }
}
