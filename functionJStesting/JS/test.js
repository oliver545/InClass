function setup() {
    createCanvas(720, 400);
    background(51);
    drawFace(100, 200, 20);  // left face with bigger eyes 
    drawFace(300, 200, 10);  // right face
    drawEar(100,100,60);
    drawEar(300,100,60);
  }
  
  function drawFace(x, y, eyeSize) {
    push();
    fill(110, 180, 200);
    translate(x,y);
    ellipse(0, 0, 150, 150); //head
    drawEye(-25, -10, eyeSize);
    drawEye(15, -10, eyeSize);
    fill(37,120,97);
    rect(-30, 30, 60,5); //mouth
    pop();
  }
  
  function drawEye(x,y, eyeSize) {
    push();
    translate(x,y);
    fill(255); //white
    ellipse(0, 0, eyeSize, eyeSize);
    fill(0); //black
    ellipse(0, 0, eyeSize/2.0, eyeSize/2.0);
    pop();
  }

  

  function drawEar(x,y, earSize){
    push();
    fill(50,23,45);
    translate(x,y);
    ellipse(0, 0, earSize);
    pop();
  }

  