"use strict";
(() => {
  // src/models/base-element.model.ts
  var BaseElement = class {
    get instance() {
      return this._instance;
    }
    create() {
    }
    handleOnClickEvent(handlerFunc) {
      this._instance.addEventListener("click", handlerFunc);
    }
  };

  // src/models/circle.model.ts
  var Circle = class extends BaseElement {
    constructor(radius, x, y, color) {
      super();
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.color = color;
    }
    create() {
      this._instance = document.createElementNS(
        "http://www.w3.org/2000/svg" /* nameSpaceURI */,
        "circle" /* svgElementTypeCircle */
      );
      this._instance.cx.baseVal.value = this.x;
      this._instance.cy.baseVal.value = this.y;
      this._instance.r.baseVal.value = this.radius;
      this._instance.style.fill = this.color;
      this.handleOnClickEvent(() => {
        console.log(`Circle at (${this.x}, ${this.y}) clicked!`);
      });
    }
  };

  // src/app.ts
  var App = class {
    init() {
      this.svgCanvas = document.getElementById("svgCanvas");
      this.svgCanvas.setAttribute("width", "600");
      this.svgCanvas.setAttribute("height", "600");
      let x = new Circle(20, 50, 50, "#F00");
      let y = new Circle(20, 100, 100, "#0F0");
      let z = new Circle(20, 150, 150, "#00F");
      x.create();
      y.create();
      z.create();
      this.svgCanvas.appendChild(x.instance);
      this.svgCanvas.appendChild(y.instance);
      this.svgCanvas.appendChild(z.instance);
    }
    run() {
      this.init();
    }
  };
  var app = new App();
  app.run();
})();
//# sourceMappingURL=bundle.js.map
