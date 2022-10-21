export interface shiftPointCrops {
    direction: number;
    lon: number;
    lat: number;
    z: number;
    distance: number;
}

export const shiftPoint = ({ direction, lon, lat, z, distance }: shiftPointCrops) => {
    if (lat == 0 && lon == 0) return

    const DELTA_X1 = -0.00000631194214
    const DELTA_Y1 = -0.000002728945365
    const DELTA_X2 = -0.00000280644172091706
    const DELTA_Y2 = 0.000006225507939

    let result = "["
    let newLon = 0
    let newLat = 0

    if (direction == 0) {
        newLon = lon - - DELTA_X1 * distance;
        newLat = lat - - DELTA_Y1 * distance;
    } else {
        newLon = lon - - DELTA_X2 * distance;
        newLat = lat - - DELTA_Y2 * distance;
    }
    result += `${newLon}, ${newLat}, ${z}],`
    
    console.log(typeof z)

    return result
}