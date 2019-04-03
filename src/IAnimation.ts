import Color from "./Color";

export default interface IAnimation {
  update(): void;
  draw(row: number, col: number, color: Color): Color;
}
