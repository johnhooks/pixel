import Color from "../Color";
import IAnimation from "../IAnimation";

class State {
  public color: Color;
  constructor(public active = false) {}
}

export default class Diagonal implements IAnimation {
  private colorIndex = 0;
  private fadeIndex = 0;

  private state: State[][];

  constructor(
    private rowCount: number,
    private colCount: number,
    private sync = 2,
    private fade = 25
  ) {
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
    if (this.fadeIndex > this.fade) {
      this.fadeIndex = 0;

      // this.sync--;

      // if (this.sync < 0) {
      //   this.sync = 2;
      // }

      this.sync++;

      this.colorIndex += 2;
      if (this.colorIndex > 255) this.colorIndex = 0;

      if (this.sync >= this.colCount) {
        this.sync = 0;
      }
    } else {
      this.fadeIndex++;
    }
  }

  draw(row: number, col: number, color: Color): Color {
    const state = this.state[row][col];

    if (state.active && this.fadeIndex === 0) {
      state.active = false;
      state.color.fadeTo(new Color(34, 34, 34), this.fade);
    } else {
      const mod = row % this.colCount;
      const adjust = mod + this.sync;
      const offset = adjust > 2 ? adjust - this.colCount : adjust;
      state.active = offset === col;
    }

    if (state.color instanceof Color && state.color.fading()) {
      state.color.stepFade();
      return state.color;
    }

    if (state.active) {
      const wheelPos = (row + col + this.colorIndex) % 255;
      state.color = Color.wheel(wheelPos);
      return state.color;
    }

    return new Color(34, 34, 34);
  }
}
