import Color from "../Color";
import IAnimation from "../IAnimation";

class State {
  public color: Color;
  constructor(public active = false) {}
}

export default class Wave implements IAnimation {
  private sineIndex = 0;
  private countDown = 0;
  private colIndex = 0;

  private state: State[][];

  constructor(private rowCount: number, private colCount: number) {
    this.state = [];

    for (let row = 0; row < rowCount; row++) {
      const array = [];
      for (let col = 0; col < colCount; col++) {
        const state = new State();
        state.color = new Color(34, 34, 34);
        array.push(state);
      }
      this.state.push(array);
    }
  }

  update(): void {
    this.countDown++;
    if (this.countDown > 30) this.countDown = 0;
  }

  draw(row: number, col: number, color: Color): Color {
    if (this.countDown === 0) {
      const result = new Color(0, Color.sineTable[this.sineIndex], 0);
      this.sineIndex++;
      if (this.sineIndex > 255) this.sineIndex = 0;
      return result;
    }
    return color;
  }
}
