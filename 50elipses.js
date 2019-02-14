var x = 25;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(255);
 for ( var x = 5; x<=500; x = x+10){
    fill(0);
  ellipse (x, height/2, 10,10);
  }


}
