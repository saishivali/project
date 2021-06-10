var ship,shipImg1,edges;
var seaImg;
function preload(){
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);

  edges = createEdgeSprites();
sea=createSprite(200,200,400,20)
  sea.addImage(seaImage)
  ship=createSprite(120,300,20,20)
  ship.addAnimation("shiping",shipImg1)
  sea.scale=0.50
  ship.scale=0.2
  sea.velocityX=-5
  
}


function draw() {
  background("blue");

 
if (sea.x < 0){
  sea.x = sea.width/4.5;
}
 drawSprites()
}









