---
---

let points;
let fr = 15;

function setup() {
  let banner = select("#menu");
  createCanvas(windowWidth, 70).parent(banner);

  /* The canvas isn't the focus, so there's no need to have a
     high framerate */
  frameRate(fr);

  // Make the total number of points relative to the device width, height
  let totalPoints = (windowWidth + height) / 20;
  makePoints(totalPoints);
}

function draw() {
  background(0);
  textSize(32);
  noStroke();
  fill(255);
  text('{{ site.title }}', 15, 45);

  for (let i = 0; i < points.length; i++) {
    points[i].show();
    points[i].float();
  }
}

function makePoints(n) {
  points = [];
  for (let i = 0; i < n; i++) {
    let x = random(0, windowWidth);
    let y = random(0, height);
    points.push(new Point(x, y));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, height);
  let totalPoints = (windowWidth + height) / 20;
  makePoints(totalPoints);
}
