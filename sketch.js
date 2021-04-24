const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box2;

function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();
    world = engine.world;

   box1 = new Box(100,200,50,90);
 ground = new Ground(100,300,400,20);
 box2 = new Box(130,10,40,90);

    
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    ground.display();
box2.display();
}