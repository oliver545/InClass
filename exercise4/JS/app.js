let melina = 50; //creating me own variable (global variable)

function setup () {
    //happens only once
    createCanvas(720, 400,); //add  WEBGL for 3D shapes
}

function draw() {
    //happens for every frame refresh (about 60/s)
    background(0,0,0);
    fill(255, 0, 0);
    ellipse(50,50,50,50);
    //rotateX(frameCount * 0.01);
    //rotateY(frameCount * 0.01);
    //box(50);
    // Draw a square at location (50, 100) with a side size of 155.
    fill(255,127,0);
    square(50, 100, 155, 20); //20 at the end is the rounded corners, radius of 20
    fill(255,255,0);
    triangle(300, 300, 350, 20, 200, 75);
    fill(127,255,0);
    square(500, 100, 70, 20);
    fill(0,255,255);
    arc(600, 50, 80, 80, 0, PI + QUARTER_PI, PIE);
    fill(127,0,255);
    //using my made up variable
    circle(width/4,height/4,melina); //melina is diameter
    melina = melina +1;
    if (melina > 200){
        melina = 50;
    }
}