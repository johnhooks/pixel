import Color from "../Color";
import IAnimation from "../IAnimation";

class State {
  public color: Color;
  constructor(public active = false) {}
}

export default class Pulse implements IAnimation {
  private frameIndex = 0;
  private frames = 7;
  private speed = 10;
  private speedIndex = 0;
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
    this.speedIndex++;
    if (this.speedIndex > this.speed) {
      this.speedIndex = 0;
      this.frameIndex++;
      if (this.frameIndex > 9) this.frameIndex = 0;
    }
  }

  draw(row: number, col: number, color: Color): Color {
    const state = this.state[row][col];
    if (this.speedIndex === 0) {
      if (state.active) {
        state.active = false;
        state.color.fadeTo(new Color(34, 34, 34), 72);
        return state.color;
      } else if (col === this.frameIndex) {
        state.active = true;
        return (state.color = new Color(255, 0, 144));
      }
    }
    if (state.color instanceof Color && state.color.fading()) {
      state.color.stepFade();
      return state.color;
    }
    return color;
  }
}
