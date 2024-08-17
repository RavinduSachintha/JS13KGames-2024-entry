import { Circle } from "./models/circle.model";

class App {
  private svgCanvas!: HTMLElement;

  private init(): void {
    this.svgCanvas = document.getElementById("svgCanvas") as HTMLElement;
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

  public run(): void {
    this.init();
  }
}

const app = new App();
app.run();
