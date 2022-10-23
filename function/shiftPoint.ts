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
  let newZ: number = 0

  if (axis == 0) {
    // newLong = lon - (- DELTA_X1) * (distance * direction);
    newLong = lon + DELTA_X1 * (distance * direction);
    newLat = lat + DELTA_Y1 * (distance * direction);
    newZ = z;
  } else if (axis == 1) {
    newLong = lon + DELTA_X2 * (distance * direction);
    newLat = lat + DELTA_Y2 * (distance * direction);
    newZ = z;
  } else if (axis == 2) {
    newLong = lon;
    newLat = lat;
    newZ = z + (distance * direction);
  }
  result += `[${newLong}, ${newLat}, ${newZ}],\n`;

  console.log(direction);

  return result;
};
