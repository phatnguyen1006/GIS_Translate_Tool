import { ShiftPointCrops } from '@function/shiftPoint';

export interface ILocationInput {
    axis: number;
    direction: number;
    location: string;
    z: number;
    distance: number;
}

export const splitFunction = ({ axis, direction, location, z, distance }: ILocationInput) => {
    location = location.trim();
    
    if (location[0] !== "[") {
        console.log("wrong pattern at location field");
        return;
    }
    if (location.slice(-1) == "]") {
        location = location.slice(0, -1);
    }
    else if (location.slice(-2) == "],") {
        console.log("del 2");
        
        location = location.slice(0, -2);
    } else {
        console.log("wrong pattern at location field");
        return;
    }

    let locationStringAfterClear = location.split(/],\n|],/);

    console.log("re: ");
    for (var index in locationStringAfterClear) {
        let point = locationStringAfterClear[index].trim().slice(1);
        console.log("point " + index + ": " + point);
    }
    
}