controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    BOB.y += -10
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    BOB.x += -10
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    BOB.x += 10
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    BOB.y += 10
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(assets.image`Game`)
    BOB = sprites.create(assets.image`BOB`, SpriteKind.Player)
    BOB.setPosition(80, 55)
})
let myEnemy: Sprite = null
let BOB: Sprite = null
scene.setBackgroundImage(assets.image`Start`)
game.onUpdateInterval(2000, function () {
    myEnemy = sprites.create(assets.image`myEnemy`, SpriteKind.Enemy)
    myEnemy.setPosition(153, 57)
})
forever(function () {
    BOB.startEffect(effects.halo)
})
