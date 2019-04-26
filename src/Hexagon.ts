import Point from "./Point";
import Path from "./svg/Path";
import Color from "./Color";

import { init, h } from "snabbdom";
import { VNode } from "snabbdom/vnode";
import { attributesModule } from "snabbdom/modules/attributes";
import { styleModule } from "snabbdom/modules/style";
import { eventListenersModule } from "snabbdom/modules/eventlisteners";

const patch = init([attributesModule, styleModule, eventListenersModule]);

function pathStringify(points: Array<Point>): string {
  let string = `M${points[0].x} ${points[0].y}`;
  for (let i = 1, len = points.length; i < len; i++) {
    string += ` L${points[i].x} ${points[i].y}`;
  }
  return string + " Z";
}

function polyStringify(points: Array<Point>): string {
  return points.reduce((string, point, i) => {
    string += `${point.x},${point.y}`;
    if (!(i === points.length - 1)) string += " ";
    return string;
  }, "");
}

const colorsPerSide = 9;

const sides = calcHexPoints(150, 10);

const sidesString = sides.map(polyStringify);

const offsetSpacing = 100 / colorsPerSide;

// One color will  wrap around the corner.
const offsetSpacings: string[] = range(colorsPerSide + 2).map(i => {
  return Math.round(i * offsetSpacing) + "%";
});

export function range(to: number): number[] {
  return Array.apply(null, { length: to }).map(Function.call, Number);
}

let vnode: VNode;

let data = {
  colors: []
};

export type tdata = { colors: Array<Color> };

// Takes 10 colors. The last offset shares the same color as the first of the next side.
function linearGradient(a: Point, b: Point, stops: Array<Color>, id: string) {
  return h(
    `linearGradient#linear-gradient-${id}`,
    {
      attrs: {
        x1: a.x,
        x2: b.x,
        y1: a.y,
        y2: b.y,
        gradientUnits: "userSpaceOnUse"
      }
    },
    stops.map((color, i) =>
      h("stop", {
        attrs: {
          offset: offsetSpacings[i],
          "stop-color": color.stringify()
        }
      })
    )
  );
}

const polygons = sidesString.map((side, i) =>
  h(`polygon.side-${i + 1}`, {
    attrs: {
      points: side,
      fill: `url(#linear-gradient-${i + 1})`
    }
  })
);

export const view: (data: tdata) => VNode = data => {
  const defs = h(
    "defs",
    sides.map((side, i) => {
      const from = i * colorsPerSide;
      const to = from + colorsPerSide + 1;

      const colors = data.colors.slice(from, to);
      if (i + 1 === 6) colors[9] = data.colors[0];

      return linearGradient(side[0], side[1], colors, (i + 1).toString());
    })
  );

  return h("div", { style: { margin: "0 auto" } }, [
    h(
      "svg.center",
      {
        attrs: { width: 400, height: 400, viewBox: "-200, -200, 400, 400" }
      },
      [defs, ...polygons]
    )
  ]);
};

export function render(data: tdata): void {
  vnode = patch(vnode, view(data));
}

export function initModule(container: HTMLElement, data: tdata): void {
  vnode = patch(container, view(data));
}

function calcHexPoints(size: number, thickness: number): Point[][] {
  const innerSize = size - thickness;

  const outerPoints: Array<Point> = [];
  const innerPoints: Array<Point> = [];

  const sides: Point[][] = [];

  for (let i = 0, corners = 6; i < corners; i++) {
    outerPoints.push(calcPointyCorner(size, i));
    innerPoints.push(calcPointyCorner(innerSize, i));

    if (i !== 0) {
      sides.push([
        outerPoints[i - 1],
        outerPoints[i],
        innerPoints[i],
        innerPoints[i - 1]
      ]);
    }
  }

  // Connect the first and last corners.
  sides.push([outerPoints[5], outerPoints[0], innerPoints[0], innerPoints[5]]);

  return sides;
}

// calculate around 0,0
function calcPointyCorner(size: number, i: number): Point {
  const degrees = 60 * i - 30;
  const rads = (Math.PI / 180) * degrees;
  return new Point(size * Math.cos(rads), size * Math.sin(rads));
}
