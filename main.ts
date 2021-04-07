let sub_1 = 0
let Addition_1 = 0
// these are one set of numbers 
input.onPinPressed(TouchPin.P0, function () {
    sub_1 += 1
    basic.showNumber(sub_1)
})
// these are another section of numbers 
input.onButtonPressed(Button.A, function () {
    Addition_1 += 1
    basic.showNumber(Addition_1)
})
// takes the two numbers a subtracts them 
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
// takes the two numbers and adds them
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Addition_1 + sub_1)
})
