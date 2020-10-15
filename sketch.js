
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    //Create the Bodies Here.

	paper = new Paper(100,400,50,50);
	ground = new Ground(400,690,800,20);
	box1 = new Box(600,675,200,15);
	box2 = new Box(500,633,15,100);
	box3 = new Box(700,633,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
      Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90})
	}
}


