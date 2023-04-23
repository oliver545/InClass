function setup() {
    createCanvas(1440, 720, WEBGL);
    //createCanvas(1440, 720); //FLAT
    background(0);
    //frameRate(3);

    let x = random(-200,1440);
    let y = random(-100,720);
    let z = random(100);
    let planetSize = random(10,80);

    noStroke();
    fill(random(35,124),random(17,158), random(35,178), random(100,255));
    translate(x,y,z);
    sphere(planetSize);
    sphere(planetSize);
   


  }
  function draw(){
    //background(0);
    //translate(-720,-360,0);
    //noStroke();
    //fill (255); // test position
    //rect (5,5,10,10); // test position
    let dirX = (mouseX / width - 0.5) * 2;
    let dirY = (mouseY / height - 0.5) * 2;
    directionalLight(250, 250, 250, -dirX, -dirY, -1);
    fill(255,255,255);
    
    
    //planet (random(200,1240),random(100,620),20);
    //let x= random(1240);
    //let y = random(620);
    //planet (random(1240),random(620),20);
    //planet (x,y,60);
   /* planet (30);
    planet (40);
    planet (60);
    planet (80);
    */
    

    
}

/*function planet(x,y,radius){ 

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
   
    
    
    fill(r,g,b,a);
    //ellipse(x,y,diameter,diameter); //the circles
    sphere(radius);
  
  }
  */

  /*function planet(radius){ 

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
   
    fill(r,g,b,a);
    //ellipse(x,y,diameter,diameter); //the circles
    //ellipse(x, y, diameter);
    let x= random(-720,1440);
    let y = random(-360,720);
    let z = random(100);
    translate(x,y,z);
    sphere(radius);
  
  }
  */



