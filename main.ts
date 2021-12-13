input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let pauze = 0
let bitterbal: game.LedSprite = null
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
basic.forever(function () {
    bitterbal = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(500)
        pauze += 100
        bitterbal.change(LedSpriteProperty.Y, 1)
    }
    if (bitterbal.isTouching(speler)) {
        game.addScore(1)
        bitterbal.delete()
    } else {
        game.gameOver()
    }
})
