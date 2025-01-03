controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -75)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.ashes, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.fire, 500)
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let aestroid: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 6 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . 8 6 . . . . . . . 
    . . . . . . 8 8 9 8 . . . . . . 
    . . . . . . 8 6 9 8 . . . . . . 
    . . . . . c c c 8 8 8 . . . . . 
    . . . . 8 8 6 6 6 9 8 8 . . . . 
    . . 8 f f f c c e e f f 8 8 . . 
    . 8 8 8 8 8 8 6 6 6 6 9 6 8 8 . 
    8 8 8 8 8 8 8 8 6 6 6 9 6 6 8 8 
    8 8 8 8 8 8 8 8 6 6 6 6 9 6 8 8 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.setPosition(78, 110)
mySprite.setStayInScreen(true)
game.onUpdateInterval(1000, function () {
    aestroid = sprites.createProjectileFromSide(img`
        . . . . . . c c c . . . . . . . 
        . . . . . a a a c c c . . . . . 
        . . . c a c f a a a a c . . . . 
        . . c a c f f f a f f a c . . . 
        . c c a c c f a a c f f a c . . 
        . a b a a c 6 a a c c f a c c c 
        . a b b b 6 a b b a a c a f f c 
        . . a b b a f f b b a a c f f c 
        c . a a a c c f c b a a c f a c 
        c c a a a c c a a a b b a c a c 
        a c a b b a a 6 a b b 6 b b c . 
        b a c b b b 6 b c . c c a c . . 
        b a c c a b b a c . . . . . . . 
        b b a c a b a a . . . . . . . . 
        a b 6 b b a c . . . . . . . . . 
        . a a b c . . . . . . . . . . . 
        `, 0, 50)
    aestroid.x = randint(0, scene.screenWidth())
    aestroid.setKind(SpriteKind.Enemy)
})
