function setup() {
    createCanvas(1440, 720, WEBGL);
    background(0);
  }
function draw(){
    //translate(-720,-360,0);
    noStroke();
    fill (255);
    rect (5,5,10,10);
    /*let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);
    fill(255,255,255);
*/
    planet (random(200,1240),random(100,620),20);

    
}

function planet(x,y,radius){ 

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
    /*fill(226,192,68,a);
    fill(x+diameter*2,diameter/2,diameter+50,a);
    ellipse(x-diameter-40,y,diameter/4,diameter/4);//planet moons
    ellipse(x-diameter,y+diameter+10,diameter/4,diameter/4);
    ellipse(x+diameter-30,y-diameter,diameter/4,diameter/4);
    ellipse(x+diameter-20,y+diameter,diameter/4,diameter/4);
    ellipse(x+diameter+30,y,diameter/4,diameter/4);
    */
    
    
    fill(255);
    //ellipse(x,y,diameter,diameter); //the circles
    sphere(radius);
  
  }

