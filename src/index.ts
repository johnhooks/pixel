import Display from "./Display/Display";
// import Diagonal from "./Animations/Diagonal";
// import Rainbow from "./Animations/Rainbow";
// import DiagonalRainbow from "./Animations/Diagonal.Rainbow";
// import Wave from "./Animations/Wave";
import Pulse from "./Animations/Pulse";

import "./main.css";

const rowCount = 15;
const colCount = 3;

const display = new Display(rowCount, colCount);

document.body.appendChild(display.el);

// const diagonal = new Diagonal(rowCount, colCount);
// const rainbow = new Rainbow(rowCount, colCount);
// const diagonalRainbow = new DiagonalRainbow(rowCount, colCount);
const program = new Pulse(rowCount, colCount);

// Would like the animation and display to update their state while waiting
// for the next animation frame.

function step(currentTime: number) {
  window.requestAnimationFrame(step);

  display.update(program);
  display.render();
}

window.requestAnimationFrame(step);
