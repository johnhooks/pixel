import Color from "../Display/Color";

export default class Diagonal {
  constructor ({colCount, rowCount}) {
    this.state = {
      sync: 0,
      fade: 30,
      fadeIndex: 0,
      colCount,
      rowCount,
      pixels: []
    }

    // Initialize the pixels array.
    for (let row = 0; row < rowCount; row++) {
      const array = [];

      for (let col = 0; col < colCount; col++) {
        array.push(0);
      }

      this.state.pixels.push(array);
    }
  }

  update () {
    const { fade, fadeIndex, colCount } = this.state;
    
    if (fadeIndex > fade) {
      this.state.fadeIndex = 0;
      
      this.state.sync++;

      if (this.state.sync >= colCount) {
        this.state.sync = 0;
      }

      this.forEach((pixel, row, col) => {
        const mod = row % colCount;

        const adjust = mod + this.state.sync;
        const offset = adjust >= colCount ? adjust - colCount : adjust;
        this.state.pixels[row][col] = (offset ===  col) ? 1 : 0;
      })
    } else {
      this.state.fadeIndex++;
    }
  }

  render (display) {
    display.clear();
    
    display.forEach((pixel, row, col) => {
      if (this.state.pixels[row][col]) {
        pixel.fill(new Color(34 + (8 * this.state.fade), 34, 34 +(6 * this.state.fade)));
      }
      if (!(row === 0) && this.state.pixels[row - 1][col]) {
        const adjust = this.state.fade - this.state.fadeIndex;
        pixel.fill(new Color(34 + (8 * adjust), 34, 34 + (6 * adjust)));
      }
    })
  }

  forEach (func) {
    for (let row = 0; row < this.state.rowCount; row++) { 
      for (let col = 0; col < this.state.colCount; col++) {
        func(this.state.pixels[row][col], row, col);
      }
    }
  }

  map (func) {
    const result = [];

    for (let row = 0; row < this.state.rowCount; row++) {
      const array = []

      for (let col = 0; col < this.state.colCount; col++) {
        array.push(func(this.state.pixels[row][col], row, col));
      }

      result.push(array);
    }

    return result;
  }
  
  clear () {
    this.state.pixels = this.map((pixel, row, col) => {
      return 0;
    })
  }
}

