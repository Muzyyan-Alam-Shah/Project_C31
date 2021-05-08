const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;

var particle=[];
var division=[];
var plinkos=[];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);
  engine=Engine.create();
  world=engine.world;
 
  for(var i=0;i<=width;i=i+80){
    division.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinkos(k,75));
  }

  for(var k=15;k<=width-10;k=k+50){
    plinkos.push(new Plinkos(k,175));
  }

  for(var k=40;k<=width;k=k+50){
    plinkos.push(new Plinkos(k,275));
  }

  for(var k=15;k<=width-10;k=k+50){
    plinkos.push(new Plinkos(k,375));
  }



  ground=new Ground(240,790,480,20);
}

function draw() {
  background(0);  
  Engine.update(engine);
  for(var i=0;i<division.length;i++){
    division[i].display();
  }

  if(frameCount%60===0){
    particle.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  
  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

  for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

   for(var k=0;k<plinkos.length;k++){
    plinkos[k].display();
  }

  if(frameCount%60===0){
    particle.push(new Particles(random(width/2-10,width/2+10),10,10));
  }
  



  ground.display();

}