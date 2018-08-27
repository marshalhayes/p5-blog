function Point(x, y, size = 12) {
  this.x = x;
  this.y = y;
  this.size = size;

  this.r = random(0, 255);
  this.g = random(0, 255);
  this.b = random(0, 255);
  this.alpha = 80;

  this.show = () => {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    ellipse(this.x, this.y, this.size, this.size);
    this.focus();
  }

  this.drag = () => {
    this.x = mouseX;
    this.y = mouseY;
  }

  this.connect = () => {
    let minDistancePoints = [];
    for (let i = 0; i < points.length; i++) {
      if (this.x != points[i].x & this.y != points[i].y) {
        stroke(points[i].r, points[i].g, points[i].b, points[i].alpha);
        strokeWeight(points[i].size / 10);
        line(this.x, this.y, points[i].x, points[i].y);
      }
    }
  }

  this.float = (a, b) => {
    this.x += random(-0.5, 0.5);
    this.y += random(-0.5, 0.5);
  }

  this.focus = (point) => {
    let radius = this.size / 2;
    let distance = dist(this.x, this.y, mouseX, mouseY);
    if (distance < radius) {
      this.connect();
      if (mouseIsPressed) {
        this.drag();
      }
    }
  }
}
