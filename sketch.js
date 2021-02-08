const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }

  var ball_Options = {
    restitution: 0.5
  }

  ground = Bodies.rectangle(400,380,700,20,options);
  ball = Bodies.circle(400,200,40,ball_Options);


  World.add(world, ground);
  World.add(world, ball);
}

function draw() {
  background(255,255,255);  

  console.log(ground);

  Engine.update(engine);


  fill("blue")
  rect(ground.position.x, ground.position.y, 700, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 40, 40);

}