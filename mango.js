class Mango{
    constructor(x,y,r){
var options ={
    isStatic:true,
    restitution:0,
    friction:1,
    density:1.2
}
this.body = Bodies.circle(x,y,r,options);
this.r = r;
this.image = loadImage("Plucking mangoes/mango.png");

World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
    }



}