// Color is defined by R, G, B from 0 - 255

var x = 175;
var y = 175;
var speed = 15;

function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(100, 150, 255);
  fill(145, 0, 255);
  rect(x, y, 50, 50);
  if (keyIsDown(LEFT_ARROW)) {
    x -= speed;
    if (x < 0) {
      x = 0;
    }
  }//

  if (keyIsDown(RIGHT_ARROW)) {
    x += speed;
    if (x > 350) {
      x = 350;
    }
  }

  if (keyIsDown(UP_ARROW)) {
    y -= speed;
    if (y < 0) {
      y = 0;
    }
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += speed;
    if (y > 350) {
      y = 350;
    }
  }

}