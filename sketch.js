const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var x,xx,xxx,xxxx;
var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var gamestate;
function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(2000, 700);
  engine = Engine.create();
  world = engine.world;
  x = random(2,4);
  xx = random(2,4);
  xxx = random(2,4);
  xxxx = random(2,4);

  x = Math.round(x);
  xx = Math.round(xx);
  xxx = Math.round(xxx);
  xxxx = Math.round(xxxx);
  ground = new Ground(0, 600, 3000, 100);

  hero = new Hero(200,600,250);
  rope = new Rope(hero.body, { x: 200, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  if(x === 3){
  box3 = new Box(900, 100, 70, 70);
  }
  if(x === 4){
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  }

  box01 = new Box(800, 100, 70, 70);
  box02 = new Box(800, 100, 70, 70);
  if(xx === 3){
  box03 = new Box(800, 100, 70, 70);
  }
  if(xx === 4){
  box03 = new Box(800, 100, 70, 70);
  box04 = new Box(800, 100, 70, 70);
  }

  box001 = new Box(700, 100, 70, 70);
  box002 = new Box(700, 100, 70, 70);
  if(xxx === 3){
  box003 = new Box(700, 100, 70, 70);
  }
  if(xxx === 4){
  box003 = new Box(700, 100, 70, 70);
  box004 = new Box(700, 100, 70, 70);
  }

  box0001 = new Box(600, 100, 70, 70);
  box0002 = new Box(600, 100, 70, 70);
  if(xxxx === 3){
  box0003 = new Box(600, 100, 70, 70);
  }
  if(xxxx === 4){
  box0003 = new Box(600, 100, 70, 70);
  box0004 = new Box(600, 100, 70, 70);
  }

gamestate = "play";
}

function draw() {
  background(bg);
  Engine.update(engine);
  box1.display();
  box2.display();
  if(x === 3){
  box3.display();
  }
  if(x === 4){
  box3.display();
  box4.display();
  }

  box01.display();
  box02.display();
  if(xx === 3){
  box03.display();
  }
  if(xx === 4){
  box03.display();
  box04.display();
  }
    

  box001.display();
  box002.display();
  if(xxx === 3){
  box003.display();
  }
  if(xxx === 4){
  box003.display();
  box004.display();
  }
    

  box0001.display();
  box0002.display();
  if(xxxx === 3){
  box0003.display();
  }
  if(xxxx === 4){
  box0003.display();
  box0004.display();
  }
  hero.display();

  rope.display();
  monster.display();
  ground.display();
  if(keyCode === 32){
    hero.body.position.x = hero.body.position.x + 3;
    keyCode = 31;
  }
  if(keyCode === 40){
    hero.body.position.y = hero.body.position.y + 1;
    keyCode = 31;
  }
  if(monster.body.position.y > height){
    gamestate = "over";
  }
  if(monster.body.position.y < height && frameCount > 5000){
  text("You Win! The monster was contained in the realm of Gods!",width/2-300,height/2);
  }

  if(gamestate === "over"){
  text("You Failed! The monster decended upon earth and killed everyone! Then the Gods killed you for your lack of responsibility!",width/2-300,height/2);
  World.remove(world,hero.body);
  }
}
