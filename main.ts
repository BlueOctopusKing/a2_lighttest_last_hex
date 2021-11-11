// This keeps going on forever
basic.forever(function () {
    // This is the basic light level.
    if (input.lightLevel() > 128) {
        // This shows a moon flying across the screen
        basic.showLeds(`
            . . . . .
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            `)
        basic.showLeds(`
            # . . . .
            # # . . .
            # # . . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            # # . . .
            . # # . .
            . # # . .
            . # # . .
            # # . . .
            `)
        basic.showLeds(`
            . # # . .
            . . # # .
            . . # # .
            . . # # .
            . # # . .
            `)
        basic.showLeds(`
            . . # # .
            . . . # #
            . . . # #
            . . . # #
            . . # # .
            `)
        basic.showLeds(`
            . . . # #
            # . . . #
            # . . . #
            # . . . #
            . . . # #
            `)
        basic.showLeds(`
            # . . . #
            # # . . .
            # # . . .
            # # . . .
            # . . . #
            `)
        basic.showLeds(`
            # # . . .
            . # # . .
            . # # . .
            . # # . .
            # # . . .
            `)
        basic.showString("Nightime")
    } else {
        basic.showString("Daytime")
    }
})
