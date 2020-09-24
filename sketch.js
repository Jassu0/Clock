var h,m,s,hangle,mangle,sangle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);
  translate(200,200);
  rotate(-90);
  h = hour();
  m = minute();
  s = second();
  sangle = map(s,0,60,0,360);
  mangle = map(m,0,60,0,360);
  hangle = map(h%12,0,12,0,360);

  push();
  rotate(sangle);
  stroke("red");
  strokeWeight(3);
  line(0,0,100,0);
  pop();
  
  push();
  rotate(mangle);
  stroke("blue");
  strokeWeight(5);
  line(0,0,75,0);
  pop();
  
  push();
  rotate(hangle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255);
  //strokeWeight(9);
  point(0,0);
  noFill();
  strokeWeight(3);
  stroke("red");
  arc(0,0,300,300,0,sangle);
  strokeWeight(5);
  stroke("blue");
  arc(0,0,280,280,0,mangle);
  strokeWeight(7);
  stroke("green");
  arc(0,0,260,260,0,hangle);
  
}