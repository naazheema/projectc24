
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var boxL,boxB,boxR;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	boxPosition=width/2+200
	 boxY=610;
	 
	 var option = {isStatic:true}

 	boxL= Bodies.rectangle(boxPosition, boxY, 20,100 , option );
 	World.add(world, boxL);

 	boxB = Bodies.rectangle(boxPosition+100, boxY+39, 200,20 , option );
 	World.add(world, boxB);

 	boxR = Bodies.rectangle(boxPosition+200, boxY, 20,100 , option );
	 World.add(world, boxR);

	 paper = new Paper(100,650,20);
	ground = new Ground(width/2,670,width,20);

}


function draw() {
 
	background(0);
 
	rectMode(CENTER);
	push();
	strokeWeight(0);
	fill("red");
	rect(boxL.position.x,boxL.position.y,20,100);
	rect(boxR.position.x,boxR.position.y,20,100);
	rect(boxB.position.x,boxB.position.y,200,20);
	pop();
	paper.display(); 
	ground.display();


}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-80});

	}
}


