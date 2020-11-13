var A,B;


function setup() {
  createCanvas(800,600);
 A =  createSprite(400, 200, 50, 50);
 B =  createSprite(400,400,50,50);
 A.shapeColor = "red";
 B.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
A.x=World.mouseX;
A.y=World.mouseY;


if(A.x-B.x <A.width/2+B.width/2 && B.x-A.x <A.width/2+B.width/2 && A.y-B.y <A.height/2+B.height/2 && B.y-A.y <A.height/2+B.height/2){
A.shapeColor="green";
B.shapeColor="green";
}
else{
  A.shapeColor="red";
  B.shapeColor="red";
}
  drawSprites();
}