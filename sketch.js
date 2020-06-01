var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var paper,dustbin1 ;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
    world = engine.world;


	paper = new Paper(100,290,70,70);
	dustbin1 = new Dustbin(500,380,120,20);
	dustbin2 = new Dustbin(450,333,20,120);
	dustbin3 = new Dustbin(550,333,20,120);


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function keyPressed(){
	console.log("paper");
if (keyCode === 38 ){
	console.log("pay");	
Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:1});



}

}






function draw() {
  
  background(0);
  Engine.update (engine);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();

 
}



