export interface circleProps {
    direction: number;
    xStart: number;
    xEnd: number;
    yStart: number;
    yEnd: number;
}

export const drawCircle = ({ direction, xStart, xEnd, yStart, yEnd }: circleProps) => {

    if (xStart == 0 && xEnd == 0) return

    const Z_OFFSET_PER_METER = 0.8
    const DELTA_X1 = -0.00000631194214
    const DELTA_Y1 = -0.000002728945365
    const DELTA_X2 = -2.81E-06
    const DELTA_Y2 = 0.000006225507939
    const LOOP_TIMES = 500

    let result = ""
    let radiusX = (xEnd - xStart) / 2
    let radiusY = (yEnd - yStart) / 2
    let radius = 0
    if (direction == 0) {
        radius = Math.abs(radiusX / DELTA_X1)
    } else if (direction == 1) {
        radius = Math.abs(radiusX / DELTA_X2)
    }

    for (let i = 1; i < LOOP_TIMES; i++) {
        let circleLineZ = Math.sqrt(Z_OFFSET_PER_METER * radius * Z_OFFSET_PER_METER * radius * (1 - (i / (LOOP_TIMES / 2) - 1) * (i / (LOOP_TIMES / 2) - 1))) + 7
        let x = xStart + radiusX * i / (LOOP_TIMES / 2)
        let y = yStart + radiusY * i / (LOOP_TIMES / 2)
        result += `[${x}, ${y}, ${circleLineZ}],\n`
    }

    return result;
}