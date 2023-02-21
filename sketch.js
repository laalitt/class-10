var square;
function setup() {
  createCanvas(1000,1000);
   square = createSprite(100,100,100,100);
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW)){
    square.position.x += 5;
  }
  if(keyDown(LEFT_ARROW)){
    square.position.x += -5;
  }
  if(keyDown(UP_ARROW)){
    square.position.y += -5;
  }
  if(keyDown(DOWN_ARROW)){
    square.position.y += 5;
  }
drawSprites();
}




