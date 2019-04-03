import Color from "../Color";

export default class Rect {
  readonly el: SVGElement;

  constructor(private x: number, private y: number, private size: number) {
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    this.el.setAttributeNS(null, "x", x.toString());
    this.el.setAttributeNS(null, "y", y.toString());
    this.el.setAttributeNS(null, "height", size.toString());
    this.el.setAttributeNS(null, "width", size.toString());
  }

  fill(color: Color) {
    this.el.setAttributeNS(
      null,
      "style",
      `fill: rgb(${color.r},${color.g},${color.b});`
    );
  }
}
