let start = 0
let elasped = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elasped = input.runningTime() - start
    basic.showNumber(Math.idiv(elasped, 1000))
})
basic.forever(function () {
	
})
