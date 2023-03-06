let melina = 50; //creating my own variable (global variable)
let A = 225;
let B = 175;
let C = 125;
let D = 75; 

function setup () {
    //happens only once
    createCanvas(600, 700,); //add  WEBGL for 3D shapes
    //myCanvas.parent('myContainer');
}

function draw() {
    //happens for every frame refresh (about 60/s)
    background(0,0,0);
    noFill();
    strokeWeight(4);
    stroke(255,255,255);
    ellipse(150,150,melina, melina);
    ellipse(150,150,50,50);
    melina = melina +1
    if (melina > 200) {
        melina = 50
    }
    ellipse(350,150,50,50);
    ellipse(450,350,50,50);
    ellipse(250,350,50,50);
    ellipse(150,550,melina,melina);
    ellipse(450,350,melina,melina);
    ellipse(150,550,50,50);
    ellipse(350,550,50,50);
    //spiral
    strokeWeight(2);
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
    //mouse
    strokeWeight(6);
    stroke(25,50,75);
    ellipse (mouseX, mouseY, 50,50);

    helperCoordintates();
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
