enum RadioMessage {
    message1 = 49434,
    a = 18289,
    b = 9031,
    sync = 27907,
    otaupdate = 23912
}
radio.onReceivedMessage(RadioMessage.otaupdate, function () {
    radio.sendMessage(RadioMessage.otaupdate)
})
radio.onReceivedMessage(RadioMessage.a, function () {
    b = 0
    a = 1
})
radio.onReceivedMessage(RadioMessage.b, function () {
    a = 0
    b = 1
})
let b = 0
let a = 0
basic.showString("masterbyte (rot (radio of things) complete) ")
radio.setGroup(91)
radio.setTransmitPower(7)
let score = 0
while (true) {
    if (a == 1) {
        score += -1
    } else if (b == 1) {
        score += 1
    } else {
    	
    }
}
loops.everyInterval(60000, function () {
    radio.sendMessage(RadioMessage.sync)
    radio.sendString("scoreinbound")
    basic.pause(15000)
    for (let index = 0; index < 90; index++) {
        radio.sendNumber(score)
    }
})
