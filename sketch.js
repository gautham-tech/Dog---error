var dogImg, happyDogImg;
var database, foodStock;
var dog;

function preload()
{
   dogImg = loadImage("images/dogImg.png");
   happyDogImg = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.15

  console.log("Press Up Arrow Key To Feed Drago Milk")
  console.log("Food Remaining : 20")
}

function draw() {  
  background(46,139,87);

  drawSprites();



if(keyWentDown(UP_ARROW)){
  writeStock()
  dog.addImage(happyDogImg)
}

if(keyWentUp(UP_ARROW)){
  dog.addImage(dogImg)
}
}


function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}
