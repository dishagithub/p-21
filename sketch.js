var car,wall
var weight,speed
var thickness,bullet

function setup() {
  createCanvas(800,400);
    speed=random(55,90)
      weight=random(400,800)
      thickness=random(22,83)
  car= createSprite(50, 400, 50, 50);
  car.velocityX=speed
  wall=createSprite(700,400,thickness,weight/2);
  bullet=createSprite(100,400,20,20)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  if(wall.x-car.x<wall.width/2+car.width/2){
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509
    if(deformation<100){
      car.shapeColor="green"
    }
    if(deformation>100&&deformation<180){
      car.shapeColor="yellow"
    }
    if(deformation>180){
      car.shapeColor="red"
    }
    if(hasCollided(bullet,wall)){
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
      if(damage>10){
        bullet.shapeColor="red"
      }
      if(damage<10){
        bullet.shapeColor="green"
      }
    }
  }
  drawSprites();
}
function hasCollided(p1,p2){
  
   if(   p1.x-p2.x<p1.width/2+p2.width/2){
     return true
   }
   else{return false}
}