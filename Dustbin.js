class Dustbin {
    constructor(x,y) {
        var options = {
            isStatic : true
        }
        this.image = loadImage("dustbin.png");
        this.width = 200;
        this.height = 100;
        this.thickness = 20;
        this.leftBody = Bodies.rectangle(550, 380, 10, 5, options);
        this.rightBody = Bodies.rectangle(650, 380, 10, 5, options);
        this.bottomBody = Bodies.rectangle(600, 470, 100, 5, options);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);  
    }
    display(){
        var leftPos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        var bottomPos = this.bottomBody.position;
        push();
        imageMode(CENTER);
        translate(leftPos.x, leftPos.y);
        fill("red");
        pop();
        push();
        rectMode(CENTER);
        translate(rightPos.x, rightPos.y);
        fill("red");
        pop();
        push();
        translate(bottomPos.x, bottomPos.y);
        fill("red");
        image(this.image, 0, -this.height/2, this.width, 225);
        pop();
    }
}