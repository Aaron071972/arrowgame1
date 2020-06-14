var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, stand
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("bow.png")
	packageIMG=loadImage("ball.png")
	standIMG=loadImage("arrow.png")

	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	stand = createSprite(114, 300, 120, 20)
	stand.addImage(standIMG)
	stand.scale=0.25
 
	
	

	packageSprite=createSprite(width/10, 0, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.014


	helicopterSprite=createSprite(width/14, 300, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.2

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor="black"


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 1 , {restitution:2, isStatic:false});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 stand = Bodies.rectangle(400, 650, 120, 20 , {isStatic:true} );
 	World.add(world, stand);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");


  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}
function keyPressed(){
if (keyPressed("left")){
	stand.velocityX=3
}

}




