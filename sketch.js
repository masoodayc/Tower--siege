const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1,box2,box3,box4,box5,box6;
var polyimg;
var ball;

function preload() {
    polyimg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(390,300,400,50);
    box1 = new Box(300,270,30,40);
    box2 = new Box(330,270,30,40);
    box3 = new Box(390,270,30,40);
    box4 = new Box(330,230,30,40);
    box5 = new Box(360,230,30,40);
    box6 = new Box(330,190,30,40);
    
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);

    //log6 = new Log(230,180,80, PI/2);
     slingshot = new SlingShot(ball,{x:100, y:200});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    imageMode(CENTER);
    image(polyimg,ball.position.x,ball.position.y,40,40);
    
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}