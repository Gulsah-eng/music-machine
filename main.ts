basic.forever(function () {
    music.playTone(input.lightLevel() * 3, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    music.changeTempoBy(input.compassHeading())
})
