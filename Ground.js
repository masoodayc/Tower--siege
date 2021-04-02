class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();

    }
}

