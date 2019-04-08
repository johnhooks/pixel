import Color from "../Color";
import IAnimation from "../IAnimation";

class State {
  constructor(public active = false, public fade = false) {}
}

export default class Diagonal implements IAnimation {
  private colorIndex = 0;
  private state: State[][];

  constructor(private rowCount: number, private colCount: number) {
    this.state = [];

    for (let row = 0; row < rowCount; row++) {
      const array = [];
      for (let col = 0; col < colCount; col++) {
        array.push(new State());
      }
      this.state.push(array);
    }
  }

  update(): void {
    this.colorIndex++;
    if (this.colorIndex > 255) this.colorIndex = 0;
  }

  draw(row: number, col: number, color: Color): Color {
    const wheelPos = (row + col + this.colorIndex) % 255;
    return Color.wheel(wheelPos);
  }
}
