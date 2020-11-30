class Ball{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution:0.5,
            friction:0.5,
            density:1.2,
        }
        this.image = loadImage("paper.png");
        this.radius = radius;
        this.body = Bodies.circle(x,y,radius/3,options);      
     
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        push ();
        translate(pos.x, pos.y)
        /*fill("blue");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius*2);*/
        imageMode(CENTER);
        image (this.image, 0, 0, this.radius, this.radius);
        pop ();
    }
};