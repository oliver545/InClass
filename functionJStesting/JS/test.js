function setup() {
    createCanvas(720, 720);
    background(0);
    frameRate(5);
  }
  
  function draw(){ 
    planet (100,100,20);
    planet (300,200,100);
    planet (600,150,50);
    planet (600,150,50);
    planet (150,500,80);
    planet (400,450,30);
    planet (550,600,60);
    planet (550,350,40);
    frameRate(5);
}
  
  function planet(x,y,diameter){
    /*colors
    r = 124,82,55,35,0
    g = 158,82,37,17,0
    b = 178,140,84,35,0
    */

    r = random(35,124);
    g = random(17,158);
    b = random(35,178);
    a = random(100,255);
    //fill(226,192,68,a);
    fill(x+diameter*2,diameter/2,diameter+50,a);
    ellipse(x-diameter-40,y,diameter/4,diameter/4);//planet moons
    ellipse(x-diameter,y+diameter+10,diameter/4,diameter/4);
    ellipse(x+diameter-30,y-diameter,diameter/4,diameter/4);
    ellipse(x+diameter-20,y+diameter,diameter/4,diameter/4);
    ellipse(x+diameter+30,y,diameter/4,diameter/4);
    
    
    
    fill(r,g,b,a);
    ellipse(x,y,diameter,diameter); //the circles
  }

  

  