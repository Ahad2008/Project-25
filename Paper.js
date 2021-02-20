class Paper {
    constructor(x,y) {
        var options = {
            isStatic: false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.5
        }
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(x,y,15,options);
        this.radius = 15;
        World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        pop();
    }
}