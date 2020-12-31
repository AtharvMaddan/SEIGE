const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand
var block1,block2,block3,block4,block5,block6,block7,block8,block9
var polygon,slingshot
var gameState

function preload() {
    
}
function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    stand = new Ground(150, 305, 300, 70);
    block1 = new Box(190,315,30,40)
    block2 = new Box(220,315,30,40)
    block3 = new Box(250,315,30,40)
    block4 = new Box(160,275,30,40)
    block5 = new Box(190,275,30,40)
    block6 = new Box(220,275,30,40)
    block7 = new Box(190,235,30,40)
    slingshot = new Slingshot(this.polygon,{x:100,y:200})
     
    polygon = Bodies.circle = (50,200,20)
   

   
}
function draw() {
    
}
function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
