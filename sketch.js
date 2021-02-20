
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, paper2, paper3, paper4, ground, dustbin1, dustbin2, dustbin3;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(95, 600, 10);
	paper2 = new Paper(85, 600, 10);
	paper3 = new Paper(75, 600, 10);
	paper4 = new Paper(65, 600, 10);
	dustbin1 = new Dustbin(600, 520, 100, 10);
	ground = new Ground(400, 650, 800, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  dustbin1.display();
  ground.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 16, y: -16});
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.applyForce(paper2.body, paper2.body.position, {x: 17, y: -16});
	}
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(paper3.body, paper3.body.position, {x: 17, y: -16});
	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paper4.body, paper4.body.position, {x: 17, y: -16});
	}
}


