class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':20,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.a = 255;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    if(this.body.speed<3){
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    } else {
      if(frameCount>200){
      push();
      this.a = this.a - 5;
      tint(255, this.a); 
      rect(this.body, this.body.position.x, this.body.position.y,70,70);
      World.remove(world,this.body);
      pop();
  }

}}}