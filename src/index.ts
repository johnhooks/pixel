import Display from "./Display/Display";
import Diagonal from "./Animations/Diagonal";

import "./main.css";

const rowCount = 15;
const colCount = 3;

const display = new Display(rowCount, colCount);

document.body.appendChild(display.el);

const diagonal = new Diagonal(rowCount, colCount);

// Would like the animation and display to update their state while waiting
// for the next animation frame.

function step(currentTime: number) {
  window.requestAnimationFrame(step);

  display.update(diagonal);
  display.render();
}

window.requestAnimationFrame(step);
