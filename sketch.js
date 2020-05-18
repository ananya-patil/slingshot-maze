
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bar,string,ball;
var ground1,ground2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(400,height,800,30); 
  ground2 = new Ground(580,200,200,20);

  box1 = new Box(500,340,40,40);
  box2 = new Box(540,340,40,40);
  box3 = new Box(580,340,40,40);
  box4 = new Box(520,300,40,40);
  box5 = new Box(560,300,40,40);
  box6 = new Box(540,250,40,40);
  box7 = new Box(550,100,40,40);
  box8 = new Box(590,100,40,40);
  box9 = new Box(570,60,40,40);


  ball = Bodies.circle(mouseX,mouseY,30);
   fill("aqua");
  World.add(world,ball);
  bar = new Bar(100,350,40,100);
  string = new String(bar.body,ball);
 

}

function draw() {
  background(0);  
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,30);
  
  bar.display();
  ground1.display();
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  string.display();
  
}


function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  string.fly();
}
