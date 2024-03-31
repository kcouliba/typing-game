function setup() {
  // Add the text description and
  // display it for debugging.
  // textOutput(LABEL)

  // Draw a couple of shapes.
  // background(200)
  // fill(255, 0, 0)
  // circle(20, 20, 20)
  // fill(0, 0, 255)
  // square(50, 50, 50)

  // createCanvas(400, 400)

  // Add a general description of the canvas.
  describe('A red circle and a blue square on a gray background.')
}

function draw() {
  background(200)
  textSize(32)
  fill(255)
  stroke(0)
  strokeWeight(4)
  text('hi', 25, 50)
}
