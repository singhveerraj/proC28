class Stone {
    constructor(x,y,r){
var options ={
    isStatic: false,
    restitution:0.2,
    friction:1,
    density:1.2
     
}
this.body = Bodies.circle(x,y,r,options);
this.r = r;
this.image = loadImage("Plucking mangoes/stone.png");
World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }
}