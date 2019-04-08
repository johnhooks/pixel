import Rect from "./Rect";
import Color from "../Color";
import IAnimation from "../IAnimation";

class Pixel {
  rect: Rect;
  color: Color;
}

export default class Display {
  readonly el: SVGElement;
  private lastTime: number;
  private delta: number;
  private duration: number;
  private pixels: Pixel[][];

  constructor(
    readonly rowCount = 15,
    readonly colCount = 3,
    readonly fps = 30,
    readonly size = 28
  ) {
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    this.el.id = "main"; // TODO change to a class.

    this.el.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );

    this.el.setAttribute("height", rowCount * size + "px");
    this.el.setAttribute("width", colCount * size + "px");

    this.pixels = [];

    for (let row = 0; row < rowCount; row++) {
      const array = [];
      for (let col = 0; col < colCount; col++) {
        const x = col * size;
        const y = row * size;
        const rect = new Rect(x, y, size);
        this.el.appendChild(rect.el);
        array.push({ rect, color: new Color(34, 34, 34) });
      }
      this.pixels.push(array);
    }

    this.duration = Math.floor(1000 / fps);
  }

  update(program: IAnimation) {
    program.update();
    this.loop((row, col, pixel) => {
      pixel.color = program.draw(row, col, pixel.color);
    });
  }

  render() {
    this.loop((_row, _col, pixel: Pixel) => {
      pixel.rect.fill(pixel.color);
    });
  }

  ready(currentTime: number): boolean {
    const d = currentTime - this.lastTime + this.delta;

    if (d > this.duration) {
      this.delta = d % Math.floor(this.duration);
      this.lastTime = currentTime;
      return true;
    } else {
      return false;
    }
  }

  loop(fn: (row: number, col: number, pixel: Pixel) => any) {
    const { rowCount, colCount, pixels } = this;
    for (let row = 0; row < rowCount; row++) {
      for (let col = 0; col < colCount; col++) {
        const pixel = pixels[row][col];
        fn(row, col, pixel);
      }
    }
  }
}
