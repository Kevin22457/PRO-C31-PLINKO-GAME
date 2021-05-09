class Particle{
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          density: 0.3,
          friction: 0
      }
      this.body = Bodies.circle(x,y,r/2,options);
      this.r = r; 
      this.color = color(random(0, 255), random(0, 255), random(0, 255));
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(this.color);
      circle(pos.x, pos.y, this.r);
    }
  };