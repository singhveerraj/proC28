class Ground {
    constructor(x,y,width,height){
  var options={
 isStatic:true,
 friction:1,
 density:1.2,
 restitution:0.2
 
}
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.height = height;
 this.width = width;
 World.add(world,this.body);





                
    }
display(){
  var pos = this.body.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,this.width,this.height);
}




}




