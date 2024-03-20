import "./chunk-26VV2B24.js";
import {
  degToRad,
  isObject
} from "./chunk-53DC3RJ4.js";

// node_modules/@tsparticles/shape-circle/browser/Utils.js
var double = 2;
var doublePI = Math.PI * double;
var minAngle = 0;
var origin = { x: 0, y: 0 };
function drawCircle(data) {
  const { context, particle, radius } = data;
  if (!particle.circleRange) {
    particle.circleRange = { min: minAngle, max: doublePI };
  }
  const circleRange = particle.circleRange;
  context.arc(origin.x, origin.y, radius, circleRange.min, circleRange.max, false);
}

// node_modules/@tsparticles/shape-circle/browser/CircleDrawer.js
var sides = 12;
var maxAngle = 360;
var minAngle2 = 0;
var CircleDrawer = class {
  draw(data) {
    drawCircle(data);
  }
  getSidesCount() {
    return sides;
  }
  particleInit(container, particle) {
    const shapeData = particle.shapeData, angle = (shapeData == null ? void 0 : shapeData.angle) ?? {
      max: maxAngle,
      min: minAngle2
    };
    particle.circleRange = !isObject(angle) ? {
      min: minAngle2,
      max: degToRad(angle)
    } : { min: degToRad(angle.min), max: degToRad(angle.max) };
  }
};
export {
  CircleDrawer
};
//# sourceMappingURL=CircleDrawer-ICMSTY6J.js.map
