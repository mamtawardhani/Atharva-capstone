var En=Matter.Engine;
var Wo=Matter.World;
var Bo=Matter.Bodies
var en,wo,ground1,g2,g3,b1,ba1,r1;
var b1=[]
var score=0;



function setup() {
  createCanvas(900,600);

  en=En.create();
  wo=en.world

  ground=new gro(450,580,900,20);
  
  // g2=new gro(0,300,20,600);
  
  // g3=new gro(880,300,20,700);

  //class box
  // b1=new box(600,350);
  // b2=new box(600,320)
  // b3=new box(600,290)
  // b4=new box(600,260)
  // b5=new box(600,230)

  //ball class
  ba1=new ball(200,100)

  //rope class
  r1=new rope({x:450,y:450},ba1.bo)

  


  
}

function draw() {
  background(255,255,255);
  
  En.update(en);
  rectMode(CENTER);
  ground.display();
  // b1.display();
  // b2.display();
  // b3.display();
  // b4.display();
  // b5.display();
  ba1.display();
  r1.display();
  // g2.display();
  // g3.display();

  if(frameCount%120===0){

    b1.push(new box(random(10,800),-20));
  }

  for(var a=0;a<b1.length;a++){
    b1[a].display();
  }

  // for(var a=0;a<b1.length;a++){
   
  //   if(b1[a].y>100){
  //     score=score+1
  //   }
  // }


  text(score,700,50);

  
  for(var a =0; a <b1.length; a++){
    b1[a].score()
  }

  
}

function mouseDragged(){
  Matter.Body.setPosition(ba1.bo,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  r1.fly();
}
