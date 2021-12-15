input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let kroket: game.LedSprite = null
let pauze = 0
let bitterbal: game.LedSprite = null
let x = 0
let getal = 0
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
basic.forever(function () {
    getal = randint(1, 4)
    if (getal < 4) {
        x = randint(0, 4)
        bitterbal = game.createSprite(x, 1)
        for (let index = 0; index < 3; index++) {
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
    } else {
        x = randint(0, 4)
        kroket = game.createSprite(x, 0)
        bitterbal = game.createSprite(x, 1)
        for (let index = 0; index < 3; index++) {
            basic.pause(400)
            pauze += 100
            kroket.change(LedSpriteProperty.Y, 1)
            bitterbal.change(LedSpriteProperty.Y, 1)
        }
        if (bitterbal.isTouching(speler)) {
            game.addScore(2)
            kroket.delete()
            bitterbal.delete()
        } else {
            game.gameOver()
        }
    }
})
