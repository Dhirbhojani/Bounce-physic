// name spacing
const Engine  = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
function setup() {
  createCanvas(400,400);
  // create Engine
  //create world
  // create Bodies
  // add it to world
  myEngine = Engine.create();
  myWorld = myEngine.world;


  //box
  var ground_options = {
    isStatic : true
  }
  ground = Bodies.rectangle(200,390,400,10, ground_options); 
  World.add(myWorld, ground);
  
  var ball_options = {
    restitution:2
  }
 ball = Bodies.circle(200,200,20, ball_options);
 World.add(myWorld,ball);
  console.log(ball);
}

function draw() {
  background(200,255,255);  
  Engine.update(myEngine);
  rectMode(CENTER);
  
  rect(ground.position.x, ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);                                               
  drawSprites();
}