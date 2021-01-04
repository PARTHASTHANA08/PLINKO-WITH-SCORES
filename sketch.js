var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var Score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-350, width/2+350), 10,10));
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
  if(particles.body.position.y > 750){
    score();
  }
  textSize(20);
  text("Score : "+Score,20,30);
}
function score(){
  if(particles.body.position.x > 0 && particles.body.position.x < 80){
    Score = Score+500;
  }
 /* if(particles.x > 80 && particles.y < 160){
    Score = Score+400;
  }
  if(particles.y > 160 && particles.y < 240){
    Score = Score+300;
  }
  if(particles.y > 240 && particles.y < 320){
    Score = Score+200;
  }
  if(particles.y > 320 && particles.y < 400){
    Score = Score+100;
  }
  if(particles.y > 400 && particles.y < 480){
    Score = Score+100;
  }
  if(particles.y > 480 && particles.y < 560){
    Score = Score+200;
  }
  if(particles.y > 560 && particles.y < 640){
    Score = Score+300;
  }
  if(particles.y > 640 && particles.y < 720){
    Score = Score+400;
  }
  if(particles.y > 720 && particles.y < 800){
    Score = Score+500;
  }*/
}