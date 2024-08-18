import { Circle } from "./models/circle.model";

class App {
  // SVG canvas element
  private sc!: HTMLElement;

  private init(): void {
    this.sc = document.getElementById("svgCanvas") as HTMLElement;
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

  public run(): void {
    this.init();
  }
}

const app = new App();
app.run();
