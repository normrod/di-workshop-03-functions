//functions will now be labelled with name/description/datatype//
//setup, creates a canvas, numbers//
function setup() {
    createCanvas(400, 400)
    background(255)
  }
//square, allows us to create a square rather than an equilateral rectangle, numbers//
    function square(x, y, size) {
    rect(x, y, size, size)
  }
  function roof(x, y) {
    // ...
  }
//draw, allows us to put things on the canvas, numbers//
  function draw() {
    fill(255, 130, 0)
    stroke(0)
    triangle(0, 30, 40, 0, 80, 30)
    square(5, 30, 70)
  }