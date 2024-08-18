"use strict";
(() => {
  // src/core/contants.ts
  var Constants = class {
    static {
      // SVG name space URI
      this.svgNS = "http://www.w3.org/2000/svg";
    }
    static {
      // SVG element type circle
      this.svgTC = "circle";
    }
  };

  // src/models/base-element.model.ts
  var BaseElement = class {
    get instance() {
      return this._i;
    }
    // SVG element creation
    create() {
    }
    // click event handler for SVG element
    hdlClickEv(handlerFunc) {
      this._i.addEventListener("click", handlerFunc);
    }
  };

  // src/models/circle.model.ts
  var Circle = class extends BaseElement {
    constructor(r, x, y, c) {
      super();
      this.r = r;
      this.x = x;
      this.y = y;
      this.c = c;
    }
    create() {
      this._i = document.createElementNS(
        Constants.svgNS,
        Constants.svgTC
      );
      this._i.cx.baseVal.value = this.x;
      this._i.cy.baseVal.value = this.y;
      this._i.r.baseVal.value = this.r;
      this._i.style.fill = this.c;
      this.hdlClickEv(() => {
        console.log(`Circle at (${this.x}, ${this.y}) clicked!`);
      });
    }
  };

  // src/app.ts
  var App = class {
    init() {
      this.sc = document.getElementById("svgCanvas");
      this.sc.setAttribute("width", "600");
      this.sc.setAttribute("height", "600");
      let x = new Circle(20, 50, 50, "#F00");
      let y = new Circle(20, 100, 100, "#0F0");
      let z = new Circle(20, 150, 150, "#00F");
      x.create();
      y.create();
      z.create();
      this.sc.appendChild(x.instance);
      this.sc.appendChild(y.instance);
      this.sc.appendChild(z.instance);
    }
    run() {
      this.init();
    }
  };
  var app = new App();
  app.run();
})();
//# sourceMappingURL=bundle.js.map
