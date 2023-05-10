let dormir = false
let start = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    dormir = true
    start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    if (!(dormir)) {
        basic.showNumber(Math.idiv(time, 1000))
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    if (dormir) {
        time += input.runningTime() - start
    }
    dormir = false
})
basic.forever(function () {
    if (dormir) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
basic.forever(function () {
    if (input.runningTime() - start >= 15000) {
        music.playMelody("B A C5 C D A E F ", 200)
    } else {
        music.stopAllSounds()
    }
})
