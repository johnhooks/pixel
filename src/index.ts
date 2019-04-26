import { fromEvent } from "rxjs";
import { filter } from "rxjs/operators";

import Display from "./Display/Display";
// import Diagonal from "./Animations/Diagonal";
// import Rainbow from "./Animations/Rainbow";
// import DiagonalRainbow from "./Animations/Diagonal.Rainbow";
// import Wave from "./Animations/Wave";
import Pulse from "./Animations/Pulse";

import "./main.css";

import "./Line";

import * as hex from "./Hexagon";
import Point from "./Point";
import Color from "./Color";

const rowCount = 15;
const colCount = 3;

const display = new Display(rowCount, colCount);

// document.body.appendChild(display.el);

// const diagonal = new Diagonal(rowCount, colCount);
// const rainbow = new Rainbow(rowCount, colCount);
// const diagonalRainbow = new DiagonalRainbow(rowCount, colCount);
const program = new Pulse(rowCount, colCount);

// Would like the animation and display to update their state while waiting
// for the next animation frame.

let wheelIndex = 0;
let ledCount = 54;

const wheelFraction = Math.floor(255 / ledCount);

let show = true;
let showIndex = 0;

let firstPixel = 0;
let otherSine = 6;
function step(currentTime: number) {
  window.requestAnimationFrame(step);

  // display.update(program);
  // display.render();

  if (show) {
    hex.render({
      colors: hex.range(ledCount).map(i => {
        return new Color(
          Color.sineTable[((i + otherSine) % 27) * Math.floor(255 / 27)],
          0,
          Color.sineTable[((i + firstPixel) % 27) * Math.floor(255 / 27)]
          // Color.sineTable[i + ((firstPixel + 3) % 18) + 50]
        );
      })
    });
    firstPixel++;
    otherSine++;
    if (otherSine > ledCount - 1) {
      otherSine = 0;
    }
    if (firstPixel > ledCount - 1) {
      firstPixel = 0;
    }
    show = false;
  }
  showIndex++;
  if (showIndex === 4) {
    showIndex = 0;
    show = true;
  }
}

function hack(n: number): boolean {
  return n % 9 === 0 || n % 9 === 2;
}
window.addEventListener("DOMContentLoaded", () => {
  var container = document.createElement("div.container");
  document.body.appendChild(container);
  hex.initModule(container, {
    colors: hex
      .range(ledCount)
      .map(n => (n % 2 === 0 ? new Color(255, 255, 255) : new Color(0, 0, 0)))
  });
});

window.requestAnimationFrame(step);

let sinceLast = new Date();

fromEvent(document, "mouseup")
  .pipe(
    filter(e => {
      let timeElapsed = new Date().getTime() - sinceLast.getTime();
      sinceLast = new Date();
      return timeElapsed < 200;
    })
  )
  .subscribe(() => console.log("double clicked"));
