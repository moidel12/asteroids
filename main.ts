controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.sonar.play()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . 1 . . . . . . . 1 . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        `)
    direction = 1
    mySprite.ay += -50
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.pewPew.play()
    if (direction == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -50)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (direction == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, -50, 0)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (direction == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 1 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 50)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
    if (direction == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 50, 0)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . . . 1 . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.sonar.play()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . 1 1 
        . . 1 1 1 . . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . 1 1 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    direction = 2
    mySprite.ax += -50
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . 1 1 1 . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        . . . . . 1 1 1 . . . . . . . . 
        . . . . . . . . 1 1 . . . . . . 
        . . . . . . . . . . 1 1 1 . . . 
        . . . . . . . . . . . . . 1 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.sonar.play()
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        1 1 . . . . . . 1 1 1 . . . . . 
        . . . . . . . . . . . 1 1 1 . . 
        1 1 . . . . . . 1 1 1 . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    direction = 4
    mySprite.ax += 50
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . . 1 . 1 . . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . . 1 . . . 1 . . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . 1 . . . . . . . 1 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.sonar.play()
    mySprite.setImage(img`
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . 1 . . . . . . . 1 . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . 1 . . . . . 1 . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . 1 . . . 1 . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . 1 . 1 . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    direction = 3
    mySprite.ay += 50
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 500)
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.knock.play()
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
    mySprite.setPosition(74, 52)
    otherSprite.destroy(effects.spray, 500)
})
let projectile: Sprite = null
let rock: Sprite = null
let mySprite: Sprite = null
let direction = 0
info.setLife(3)
tiles.setTilemap(tilemap`level1`)
direction = 4
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 1 . . . . . . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . . . . . 1 1 1 . . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . 1 1 1 . . . . . . . . . . 
    . . 1 . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 10, 10)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    rock = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(rock, value)
    tiles.setTileAt(value, assets.tile`myTile`)
}
