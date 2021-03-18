let sub_1 = 0
let Addition_1 = 0
input.onPinPressed(TouchPin.P0, function () {
    sub_1 += 1
    basic.showNumber(sub_1)
})
input.onButtonPressed(Button.A, function () {
    Addition_1 += 1
    basic.showNumber(Addition_1)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Addition_1 - sub_1)
})
input.onButtonPressed(Button.B, function () {
    Addition_1 += -1
    basic.showNumber(Addition_1)
})
input.onPinPressed(TouchPin.P1, function () {
    sub_1 += -1
    basic.showNumber(sub_1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Addition_1 + sub_1)
})
