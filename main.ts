input.onButtonPressed(Button.A, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
})
input.onButtonPressed(Button.B, function () {
    milivoltios = Math.round(pins.analogReadPin(AnalogPin.P0) * 3000 / 1023)
    basic.showNumber(milivoltios)
    if (milivoltios < 1200) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
    milivoltios = 0
    basic.pause(5000)
    basic.clearScreen()
})
let milivoltios = 0
basic.showString("BATTERY TEST")
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.showIcon(IconNames.Asleep)
basic.pause(500)
basic.showIcon(IconNames.Sad)
basic.pause(500)
basic.showIcon(IconNames.Confused)
basic.pause(500)
basic.showIcon(IconNames.Angry)
basic.pause(500)
basic.clearScreen()
basic.forever(function () {
	
})
