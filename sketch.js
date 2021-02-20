const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var Roof1;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
    
	Roof1 = new Roof(350,200,200,20)

	bob1 = new bob(300,400,2)
	bob2 = new bob(330,400,2)
	bob3 = new bob(360,400,2)
	bob4 = new bob(40,400,2)
	bob5 = new bob(420,400,2)

	rope1= new Rope(bob1.body, Roof1.body)
	rope2= new Rope(bob2.body, Roof1.body)
	rope3= new Rope(bob3.body, Roof1.body)
	rope4= new Rope(bob4.body, Roof1.body)
	rope5= new Rope(bob5.body, Roof1.body)
	
     

	Engine.run(engine);
  
}

function draw() {
  background(0);

  Roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}