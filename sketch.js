const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let base1
let base2
let bridge
let stone

let stones = []



function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;


  base1 = new Base(100,300,200,150);
  base2 = new Base(1100,300,200,150);
  
  bridge = new Bridge(15, { x:80, y: 300 });
  jointPoint = new Base(1000, 300, 40, 20,);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(450,300);
    var y = random(-50,150);
    var stone = new Stone(x, y, 70, 70); 
    stones.push(stone);
    
  }



  frameRate(80);


}

function draw() {
  background(51);
  Engine.update(engine);
  base1.display();
  base2.display();
  bridge.show();
 
  for (var stone of stones) {
    stone.display();
  }

}
