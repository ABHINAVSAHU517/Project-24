
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	box1 = new Box(520,630,100,10);
	box2 = new Box(465,590,10,100);
	box3 = new Box(575,590,10,100);
	ground= new Ground(400,650,800,30);
	paper= new Paper(100,500);

	//Create the Bodies Here.
	
	   
	   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  Engine.update(engine)

  


  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
 
 

}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:11.5,y:-15});
			}	 
}


