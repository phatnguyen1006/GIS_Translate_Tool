import { DELTA_X1, DELTA_Y1, DELTA_X2, DELTA_Y2 } from "@constants";
import { ShiftPointCrops } from "@types";

export const shiftPoint = ({
  axis,
  direction,
  lon,
  lat,
  z,
  distance,
}: ShiftPointCrops) => {
  if (lat == 0 && lon == 0) return;

  let result: string = "";
  let newLong: number = 0;
  let newLat: number = 0;

  if (axis == 0) {
    // newLong = lon - (- DELTA_X1) * (distance * direction);
    newLong = lon + DELTA_X1 * (distance * direction);
    newLat = lat + DELTA_Y1 * (distance * direction);
  } else {
    newLong = lon + DELTA_X2 * (distance * direction);
    newLat = lat + DELTA_Y2 * (distance * direction);
  }
  result += `[${newLong}, ${newLat}, ${z}],`;

  console.log(direction);

  return result;
};
