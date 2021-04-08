let strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGB)
strip.setBrightness(32)
strip.clear()
strip.showRainbow(1, 360)
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
