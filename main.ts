radio.onReceivedValue(function (name, value) {
    if (name == "y") {
        y = value
    }
    if (name == "x") {
        x = value
    }
})
let x = 0
let y = 0
radio.setGroup(1)
y = 0
x = 0
basic.forever(function () {
    if (y >= 0 && y < 501) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 500 - y)
    }
    if (y > 510 && y <= 1019) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, y / 2)
    }
    if (x > 510 && x <= 1019) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Left, x / 2)
    }
    if (x >= 0 && x < 501) {
        Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Right, 500 - x)
    }
})
