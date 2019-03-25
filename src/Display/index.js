import Pixel from './Pixel';
import Color from './Color';

export default class Display {
  constructor ({
    rowCount = 15,
    colCount = 3,
    size = 28,
    defaultFill = new Color(34, 34, 34)
  }) {
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.size = size;

    this.defaultFill = defaultFill;

    this.el = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

    this.el.id = "main";
    
    this.pixels = [];

    this.el.setAttributeNS(
      "http://www.w3.org/2000/xmlns/",
      "xmlns:xlink",
      "http://www.w3.org/1999/xlink"
    );

    this.el.setAttribute("height", rowCount * size + "px");
    this.el.setAttribute("width", colCount * size + "px");

    for (let row = 0; row < rowCount; row++) {
      const array = []

      for (let col = 0; col < colCount; col++) {
        const x = col * size;
        const y = row * size;

        const pixel = new Pixel({ x, y, size, defaultFill });

        this.el.appendChild(pixel.el);
        array.push(pixel);
      }

      this.pixels.push(array);
    }
  }

  forEach (func) {
    for (let row = 0; row < this.rowCount; row++) {
      for (let col = 0; col < this.colCount; col++) {
        func(this.pixels[row][col], row, col);
      }
    }
  }

  clear (color) {
    this.forEach((pixel) => {
      pixel.fill(color ? color : this.defaultFill);
    })
  }
}
