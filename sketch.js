

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	//dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  platform = new Ground(400, 680, 800, 40);
  paper = new Ball(100, 675, 70);
  dustbin =  new Dustbin();
  
  
  
}
function draw() {
  background(180);
  text(mouseX + ' , '+mouseY, mouseX, mouseY);
  platform.display();  
  dustbin.display();
  paper.display();
  
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
   
    Matter.Body.applyForce(paper.body, paper.body.position, {x: 70, y: -98});
    console.log("Hello");
  }
}



