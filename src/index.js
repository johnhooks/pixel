import Color from "./Display/Color";
import Display from "./Display";
import Diagonal from "./Animations/Diagonal";

import css from './main.css';
// const svg = document.getElementById("main");
// const svgns = svg.namespaceURI;

// const height = 15;
// const width = 3;

// const frameHeight = 15;
// const frameWidth = 15;

// const size = 28;

// const pixels = [];

// svg.setAttribute("height", height * size + "px");
// svg.setAttribute("width", width * size + "px");

// const numRows = 3;

const pattern = [
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ], // 0
  [ 0, 0, 0, 0, 1, 0, 1, 0, 0 ], // 1
  [ 0, 0, 0, 1, 0, 0, 0, 1, 0 ], // 2
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ], // 3
  [ 0, 0, 0, 0, 1, 0, 1, 0, 0 ], // 4
  [ 0, 0, 0, 1, 0, 0, 0, 1, 0 ], // 5
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ], // 6
  [ 0, 0, 0, 0, 1, 0, 1, 0, 0 ], // 7
  [ 0, 0, 0, 1, 0, 0, 0, 1, 0 ], // 8
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ], // 9
  [ 0, 0, 0, 0, 1, 0, 1, 0, 0 ], // 10
  [ 0, 0, 0, 1, 0, 0, 0, 1, 0 ], // 11
  [ 0, 0, 0, 0, 0, 1, 0, 0, 0 ], // 12
  [ 0, 0, 0, 0, 1, 0, 1, 0, 0 ], // 13
  [ 0, 0, 0, 1, 0, 0, 0, 1, 0 ], // 14
]

// for (let i = 0; i < height; i++) {
//   const row = []

//   for (let j = 0; j < width; j++) {
//     const pixel = document.createElementNS(svgns, "rect");

//     const x = j * size;
//     const y = i * size;

//     pixel.setAttributeNS(null, "x", x);
//     pixel.setAttributeNS(null, "y", y);
//     pixel.setAttributeNS(null, "height", size);
//     pixel.setAttributeNS(null, "width", size);
//     pixel.setAttributeNS(null, "fill",  "#222");

//     svg.appendChild(pixel);
//     row.push(pixel);
//   }

//   pixels.push(row);
// }

const rowCount = 15;
const colCount = 3;

const display = new Display({
  rowCount,
  colCount,
  size: 28,
  defaultFill: new Color(34, 34, 34)
});

const diagonal = new Diagonal({ rowCount, colCount});

document.body.appendChild(display.el);

// Animation

const fps = 1;
const duration = Math.floor(1000 / fps);

let lastTime = 0;
let delta = 0;

function step (currentTime) {
  window.requestAnimationFrame(step);

  update();
  render();
  
  /* const d = currentTime - lastTime + delta;
   * 
   * if (d > duration) {
   *  */  
  /* delta = d % duration;
   * lastTime = currentTime; */
  /*      } */
}

function render () {
  diagonal.render(display);
}

function update () {
  diagonal.update();
}

window.requestAnimationFrame(step);

