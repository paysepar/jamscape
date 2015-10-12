# jamscape-git
A web-based drumkit that plays animations along with the sounds.

See scripts.js to access the API

API: Functions, objects, and methods...

function drawCanvas()
// Function that clears canvas and draw contents repeatedly until animations are complete. Returns null.

function Instrument(name, keyCode, audioFile)
// Instrument object constructor with the name <string> of the instrument, the keyCode <integer> of the keyboard key that plays the instrument and the link to the instrument audio audioFile <string>. When an instrument is initialized, it randomly chooses a sound and animation to play whenever its .playSound() method is called.
    .playSound() method plays the sound corresponding to the instrument
    .playAnimation() plays the animation corresponding to the instrument

function Animations(numberOfConcurrentAnimations)
// Constructor for Animations object, which has an array of individual animationObjects and has methods for drawing the animations. numberOfConcurrentAnimations is the maximum number of animations to be concurrently drawn on the screen.
    .isOngoing() method checks if any animations are still being drawn
    .add(animationObject) method takes an animationObject as an argument and adds it to the array of animations

function ShootingStar(x, y, duration, radius)
// Constructor for shooting star animation object. Added to animations object through the animations.add method. Parameters are the x,y starting coordinates relative to the canvas, the duration of the animation in milliseconds, and the radius of the star in pixels.
    .draw() method draws the animation on canvas
    .isOngoing() method checks whether the animation is still being drawn

function TwinkleStar(x, y, duration, maxRadius)
// Twinkle star animation object. Added to animations object through the animations.add method. Parameters are the x,y starting coordinates relative to the canvas, the duration of the animation in milliseconds, and the radius of the star in pixels.
    .draw() method draws the animation on canvas
    .isOngoing() method checks whether the animation is still being drawn

function Firework(x, y, duration, maxRadius, color)
// Firework animation object. Added to the animations object through the animations.add method. Parameters are the x,y starting coordinates relative to the canvas, the duration of the animation in milliseconds, the radius of the firework in pixels, and rgb color of the firework (rgb colors must be a string formatted as 'r,g,b')
    .draw() method draws the animation on canvas
    .isOngoing() method checks whether the animation is still being drawn

function drawButton(instrument, index)
// Function that draws button that plays an instrument when touched or clicked. Location of the button is based on index <integer>, which is the instrument's position in the array of active instruments. Returns null.
