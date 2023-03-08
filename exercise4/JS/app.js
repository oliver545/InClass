let melina = 50; //creating my own variable (global variable)
let A = 225;
let B = 175;
let C = 125;
let D = 75; 
//Exponentially increase the size of an ellipse.
let eSize = 3; // Original Size
let eLoc = 40; // Original Location


function setup () {
    //happens only once
    createCanvas(600, 700, WEBGL); //add  WEBGL for 3D shapes
    //myCanvas.parent('myContainer');
}

function draw() {
    translate(-300,-350,0); //mess around with this to get it to work with WEBGL
    //happens for every frame refresh (about 60/s)
    background(0,0,0);
    
    //BASE CIRCLES
    //noFill();
    strokeWeight(4);
    stroke(255,255,255);
    fill(107,5,4);
    ellipse(150,150,melina, melina); //top outer L
    fill(0,0,0);
    ellipse(150,150,50,50); //top center L
    ellipse(350,150,50,50); //top R
    fill(163,50,11);
    ellipse(450,350,melina,melina); //middle outer L
    fill(0,0,0);
    ellipse(450,350,50,50); //middle center R
    ellipse(250,350,50,50); //middle L
    fill(230,175,46);
    ellipse(150,550,melina,melina); //bottom outer L
    fill(0,0,0);
    ellipse(150,550,50,50); //bottom center R
    ellipse(350,550,50,50); //bottom R
    melina = melina +1
    if (melina > 200) {
        melina = 50
    }
    //CONCENTRIC CIRCLES ILLUSION
    noFill();
    strokeWeight(2);
    //noStroke();
    fill(32,5,28);
    ellipse(305,250,A,A);
       /* A = A+1
        if (A > 275) {
            A = 255
        }*/
    ellipse(305,250,B,B);
        B = B+1
        if (B > A) {
            B = 175
        }
    ellipse(305,250,C,C);
        C = C+1
        if (C > B) {
            C = 125
        }
    ellipse(305,250,D,D);
        D = D+1
        if (D > C) {
            D = 75
        }

    // RED CIRCLES from corner
    /*strokeWeight(4);
    stroke(255,0,0);

    ellipse(eLoc, eLoc, eSize, eSize);
    ellipse(eLoc * 2, eLoc * 2, pow(eSize, 2), pow(eSize, 2));
    ellipse(eLoc * 4, eLoc * 4, pow(eSize, 3), pow(eSize, 3));
    ellipse(eLoc * 8, eLoc * 8, pow(eSize, 4), pow(eSize, 4));
    ellipse(eLoc * 10, eLoc * 10, pow(eSize, 5), pow(eSize, 5));
    */  
    
    noFill();
    //BLUE CIRCLES
    strokeWeight(4);
    stroke(58, 12, 163);
    ellipse(50, 350, pow(eSize, 2.5), pow(eSize, 2.5));
    ellipse(50, 350, pow(eSize, 3.5), pow(eSize, 3.5));
    ellipse(50, 350, pow(eSize, 4.5), pow(eSize, 4.5));
    ellipse(50, 350, pow(eSize, 5.5), pow(eSize, 5.5));

     //GREEN CIRCLES
     stroke(67, 97, 238);
     ellipse(550, 150, pow(eSize, 2.5), pow(eSize, 2.5));
     ellipse(550, 150, pow(eSize, 3.5), pow(eSize, 3.5));
     ellipse(550, 150, pow(eSize, 4.5), pow(eSize, 4.5));
     ellipse(550, 150, pow(eSize, 5.5), pow(eSize, 5.5));

    //BOTTOM RED CIRCLES
    stroke(76, 201, 240);
    ellipse(550, 550, pow(eSize, 2.5), pow(eSize, 2.5));
    ellipse(550, 550, pow(eSize, 3.5), pow(eSize, 3.5));
    ellipse(550, 550, pow(eSize, 4.5), pow(eSize, 4.5));
    ellipse(550, 550, pow(eSize, 5.5), pow(eSize, 5.5));

    

    /*
    DONUT
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(30, 15);
    */

    /*
    //mouse
    strokeWeight(6);
    stroke(25,50,75);
    ellipse (mouseX, mouseY, 50,50);
    */

    //Cursor expiriment
    if (mouseX < 300 && mouseY < 350) {
        fill(67, 97, 238);
        noStroke();
        ellipse (mouseX, mouseY, 50,50);
      } else if (mouseX > 300 && mouseY < 350) {
        fill(58, 12, 163);
        noStroke();
        ellipse (mouseX, mouseY, 50,50);
      } else if (mouseX > 300 && mouseY > 350) {
        fill(247, 37, 133);
        noStroke();
        ellipse (mouseX, mouseY, 50,50);
      } else {
        fill(114, 9, 183);
        noStroke();
        ellipse (mouseX, mouseY, 50,50);
      }
 

    helperCoordintates();

    translate(250,350,0);
    //move your mouse to change light direction
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);
    fill(255,255,255);
    sphere(30); // draw a sphere with radius 30 middle center
   
    translate(100,-200,0);
    fill(241,90,36);
    sphere(30); //top center

    translate(200,-0,0);
    fill(255,123,172);
    sphere(30); //top R

    translate(-400,-0,0);
    fill(0,169,157);
    sphere(30); //top L

    translate(-100, 200,0);
    fill(0,146,69);
    sphere(30); //middle L

    translate(400, 0,0);
    fill(27,20,100);
    sphere(30); //middle R

    translate(100, 200,0);
    fill(255,255,0);
    sphere(30); //middle R

    translate(-200, 0,0);
    fill(247,147,30);
    sphere(30); //bottom center

    translate(-200, 0,0);
    fill(237,66,121);
    sphere(30); //bottom L


  
    
}  

function helperCoordintates() {
    fill(255);
    text(
        '('+ floor(mouseX)+
        ','+ 
        floor(mouseY)+
        ')',
        mouseX,
        mouseY
        );
}
