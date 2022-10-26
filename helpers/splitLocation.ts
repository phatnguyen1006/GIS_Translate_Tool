import { ShiftPointCrops } from "@types";

export interface ILocationInput {
  axis: string;
  direction: string;
  location: string;
  distance: string;
}

export const splitFunction = ({
  axis,
  direction,
  location,
  distance,
}: ILocationInput): ShiftPointCrops[] | void => {
  let result: ShiftPointCrops[] = [];

  location = location.trim();

  if (location[0] !== "[") {
    console.log("wrong pattern at location field");
    return;
  }
  if (location.slice(-1) == "]") {
    location = location.slice(0, -1);
  } else if (location.slice(-2) == "],") {
    location = location.slice(0, -2);
  } else {
    console.log("wrong pattern at location field");
    return;
  }

  let locationStringAfterClear = location.split(/],\n|],/);

  console.log("re: ");
  for (var index in locationStringAfterClear) {
    let point = locationStringAfterClear[index].trim().slice(1);
    console.log(
      `point: ${index}: ${point}\n -- x: ${point
        .split(",")[0]
        .trim()}\n -- y: ${point.split(",")[1].trim()}`
    );

    let shiftPoint: ShiftPointCrops = {
      axis: parseInt(axis),
      direction: parseInt(direction),
      lon: parseFloat(point.split(",")[0].trim()),
      lat: parseFloat(point.split(",")[1].trim()),
      z: parseFloat(point.split(",")[2].trim()),
      distance: parseFloat(distance),
    };

    result.push(shiftPoint);
    console.log("result: ", shiftPoint);
  }

  return result;
};
