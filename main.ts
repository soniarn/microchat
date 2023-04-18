radio.onReceivedString(function (receivedString) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(2)
if (input.buttonIsPressed(Button.A)) {
    basic.clearScreen()
    radio.sendString("smile")
} else if (input.buttonIsPressed(Button.B)) {
    basic.clearScreen()
    radio.sendString("sí")
}
