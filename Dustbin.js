class Dustbin {
    constructor(x, y, width, height) {
      var options = {
         isStatic:true
      }
      this.image = loadImage("dustbingreen.png");
  
      this.leftwall = Bodies.rectangle(550, 620, 10, 80, options);
      this.rightwall = Bodies.rectangle(690, 620, 10, 80, options);
      this.lowerWall = Bodies.rectangle(620, 655, 140, 10, options);

      this.width = 10;
      this.height = 80;
      
      World.add(world, this.leftwall);
      World.add(world, this.rightwall);
      World.add(world, this.lowerWall);
    }
    display(){
      
      push();        
      rectMode(CENTER);
      fill(180);
      //rect(this.leftwall.position.x-5, this.leftwall.position.y, this.width, this.height);
      //rect(this.rightwall.position.x+5, this.rightwall.position.y, this.width, this.height);9
      //rect(this.lowerWall.position.x, this.lowerWall.position.y, this.width+130, this.height-70);
      image(this.image, this.leftwall.position.x-20, this.lowerWall.position.y-145, 200,150)
      
      pop();
    }
  };
