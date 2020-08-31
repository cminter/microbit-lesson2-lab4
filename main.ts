function meltSome () {
    col = randint(0, 4)
    size = randint(10, 50)
    row = 0
    dropping = 1
    while (dropping == 1 && row <= 4) {
        current = led.pointBrightness(col, row)
        if (current > 0) {
            led.plotBrightness(col, row, Math.max(current - size, 0))
            dropping = 0
        }
        row += 1
    }
}
function dropFlake () {
    col = randint(0, 4)
    size = randint(10, 50)
    row = -1
    dropping = 1
    while (dropping == 1 && row < 4) {
        prevRow = row
        row += 1
        current = led.pointBrightness(col, row)
        if (current == 0) {
            led.unplot(col, prevRow)
            led.plotBrightness(col, row, size)
        } else {
            if (current < 255) {
                led.unplot(col, prevRow)
                led.plotBrightness(col, row, current + size)
            }
            dropping = 0
        }
        basic.pause(50)
    }
}
input.onButtonPressed(Button.A, function () {
    if (snowing < 1) {
        snowing = 1
    } else {
        snowing = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (snowing > -1) {
        snowing = -1
    } else {
        snowing = 0
    }
})
let prevRow = 0
let current = 0
let dropping = 0
let row = 0
let size = 0
let col = 0
let snowing = 0
snowing = 1
basic.clearScreen()
basic.forever(function () {
    if (snowing == 1) {
        dropFlake()
    } else if (snowing == -1) {
        meltSome()
    }
    basic.pause(100)
})
