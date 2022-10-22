import { DELTA_X1, DELTA_X2, Z_OFFSET_PER_METER } from "@constants";
import { ICircleProps } from "@types";

export const drawCircle = ({
  direction,
  xStart,
  xEnd,
  yStart,
  yEnd,
  z
}: ICircleProps) => {
  if (xStart == 0 && xEnd == 0) return;

  const LOOP_TIMES = 500;

  let result = "";
  let radiusX = (xEnd - xStart) / 2;
  let radiusY = (yEnd - yStart) / 2;
  let radius = 0;
  if (direction == 0) {
    radius = Math.abs(radiusX / DELTA_X1);
  } else if (direction == 1) {
    radius = Math.abs(radiusX / DELTA_X2);
  }

  console.log(radius)

  for (let i = 1; i < LOOP_TIMES; i++) {
    let circleLineZ =
      Math.sqrt(
        Z_OFFSET_PER_METER *
          radius *
          Z_OFFSET_PER_METER *
          radius *
          (1 - (i / (LOOP_TIMES / 2) - 1) * (i / (LOOP_TIMES / 2) - 1))
      ) + z;
    let x = xStart + (radiusX * i) / (LOOP_TIMES / 2);
    let y = yStart + (radiusY * i) / (LOOP_TIMES / 2);
    result += `[${x}, ${y}, ${circleLineZ}],\n`;
  }

  return result;
};
