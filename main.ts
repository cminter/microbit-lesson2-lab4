function dropFlake () {
    flakeCol = randint(0, 4)
    flakeSize = randint(10, 50)
    flakeRow = -1
    dropping = 1
    while (dropping == 1 && flakeRow < 4) {
        prevFlakeRow = flakeRow
        flakeRow += 1
        total = led.pointBrightness(flakeCol, flakeRow)
        if (total == 0) {
            led.unplot(flakeCol, prevFlakeRow)
            led.plotBrightness(flakeCol, flakeRow, flakeSize)
        } else {
            if (total < 255) {
                led.unplot(flakeCol, prevFlakeRow)
                led.plotBrightness(flakeCol, flakeRow, total + flakeSize)
            }
            dropping = 0
        }
        basic.pause(100)
    }
}
let total = 0
let prevFlakeRow = 0
let dropping = 0
let flakeRow = 0
let flakeSize = 0
let flakeCol = 0
let snowing = 1
basic.clearScreen()
basic.forever(function () {
    while (snowing == 1) {
        dropFlake()
        basic.pause(100)
    }
})
