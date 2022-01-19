var platform,platformImage;
var wobble,wobbleImage;
var star,starImage;
var obstacle;
var gameState = 0;
var score = 0;


function preload() {
 
 
  platformImage = loadImage("assets/platform.png");
  wobbleImage = loadImage("assets/wobble.png");
  starImage = loadImage("assets/star.png");

}

function setup() {
  
  canvas = createCanvas(1000,600);

  
 

  wobble = createSprite(400,400);
  wobble.addImage(wobbleImage);
  wobble.scale = 0.3;

  platform = createSprite(500,500);
  platform.scale = 0.2;

  star = createSprite(300,300);
  star.scale = 0.05;


platformsGroup = new Group();
starsGroup = new Group();

 }

function draw() {

  background("grey");
  
  
  if(keyDown("space")){

    wobble.velocityY = -10;
  }
 //wobble.velocityY = wobble.velocityY + 2;

 

wobble.collide(platform);

spawnPlatforms();
spawnStars();
  
drawSprites();
}



function spawnPlatforms() {
 
 if(frameCount%60 === 0){
 
  platform.x = Math.round(random(10,990));
  platform.y = Math.round(random(10,590));
  platform.velocityY +=5;
  platform.addImage(platformImage);
  platform.lifetime = 120;

  platformsGroup.add(platform);


 }
  
}

function spawnStars() {
 
  if(frameCount%60 === 0){
  
  
   star.x = Math.round(random(10,990));
   star.y = Math.round(random(10,590));
   star.velocityY += 5;
   star.addImage(starImage);
   star.lifetime = 120;

  starsGroup.add(star);

   
 
  }
   
 }
 
 