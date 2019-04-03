import Color from "../Color";
import IAnimation from "../IAnimation";

class State {
  constructor(public active = false, public fade = false) {}
}

export default class Diagonal implements IAnimation {
  private fadeIndex = 0;
  private state: State[][];

  constructor(
    private rowCount: number,
    private colCount: number,
    private sync = 2,
    private fade = 24
  ) {
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
    if (this.fadeIndex > this.fade) {
      this.fadeIndex = 0;

      // this.sync--;

      // if (this.sync < 0) {
      //   this.sync = 2;
      // }

      this.sync++;

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
      state.fade = true;
    } else {
      const mod = row % this.colCount;
      const adjust = mod + this.sync;
      const offset = adjust > 2 ? adjust - this.colCount : adjust;
      state.active = offset === col;
    }

    if (state.fade) {
      const adjust = this.fade - this.fadeIndex;
      if (this.fadeIndex === this.fade) state.fade = false;
      return new Color(34 + 8 * adjust, 34, 34 + 6 * adjust);
    }

    if (state.active) {
      return new Color(34 + 8 * this.fade, 34, 34 + 6 * this.fade);
    }

    return new Color(34, 34, 34);
  }
}
