
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var rightSide;
var leftSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground =new Ground(300,400,800,20);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restistution:0.3,
		friction:0,
		density:1.2,

	}
    ball=Bodies.circle(400,500,20,ball_options);
	World.add(world,ball)
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	rightSide=new Ground(width/2,670,width,20);
	leftSide=new Ground(1100,600,20,120); 
}


function draw() {
 
  background(0);
  groundobj.display();
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		function hForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		  }
		  function vForce(){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
		  }
		
	}
}

