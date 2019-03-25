export default class Pixel {
  constructor ({ x, y, size, fill /*Color */ }) {
    const el = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "rect"
    );

    el.setAttributeNS(null, "x", x);
    el.setAttributeNS(null, "y", y);
    el.setAttributeNS(null, "height", size);
    el.setAttributeNS(null, "width", size);

    if (fill) {
      this.fill(fill)
    }

    this.el = el;
  }

  fill (color /* Color */) {
    const { r, g, b } = color;
    this.el.setAttributeNS(null, "style", `fill: rgb(${r},${g},${b});`)
  }
}
