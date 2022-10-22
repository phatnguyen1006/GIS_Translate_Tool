import { shiftPoint } from "./shiftPoint";
import { ShiftPointCrops } from "@types";

export const shiftBlock = (points: ShiftPointCrops[]) => {
  let results = points.map((point, index) => {
    return shiftPoint(point);
  });

  return results.join(" ");
};
