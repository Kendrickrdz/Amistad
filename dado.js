var fas;
function setup () {
  createCanvas(500, 500); 
  fas = int(random(1, 7));
}
function draw() {
  background(255);
  if(mouseIsPressed){
    fas = int(random(1,7));
  }
  if (fas == 1) {
    fas1();
  }

  if (fas == 2) {
    fas2();
  }
  if (fas == 3) {
    fas3();
  }
  if (fas == 4) {
    fas4();
  }
  if (fas == 5) {
    fas5();
  }
  if (fas == 6) {
    fas6();
  }
}





function fas1(){
noStroke();
fill(0);
ellipse(250,250,50,50);
}
function fas2(){
noStroke();
fill(0);
ellipse(150,150,50,50);
ellipse(300,300,50,50);
}
function fas3(){
  noStroke();
  fill(0);
  ellipse(150,150,50,50);
  ellipse(250,250,50,50);
  ellipse(350,350,50,50);
}
function fas4(){
  noStroke();
  fill(0);
  ellipse(45,45,50,50);
  ellipse(445,45,50,50);
  ellipse(45,445,50,50);
  ellipse(445,445,50,50);
}

function fas5 (){
  noStroke();
  fill(0);
  ellipse(45,45,50,50);
  ellipse(445,45,50,50);
  ellipse(45,445,50,50);
  ellipse(250,250,50,50);
  ellipse(445,445,50,50);
}

function fas6(){
  noStroke();
  fill(0);
 ellipse(45,45,50,50);
  ellipse(445,45,50,50);
  ellipse(45,445,50,50);
  ellipse(445,445,50,50);
  ellipse(45,250,50,50);
  ellipse(445,250,50,50);
}
