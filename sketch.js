var x = 126;
var r = 240;
var y = 242;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(95, 154, 250);
  textSize(45);
  textFont('Georgia');
  text('Click Me!', 155, 150);
  ellipse(250,250,100,100);
  fill(x,r,y);
  stroke(255,255,255);
  strokeWeight(2);
}

function mousePressed() {
  console.log("Clicked");
  x = random(0,256);
  r = random(0,256);
  y = random(0,256);
}