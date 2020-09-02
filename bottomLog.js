class sidelog{
constructor(x,y,width,height){
  var op={
    isStatic:true,

  }
  this.body=Bodies.rectangle(x,y,width,height,op);
  this.weight=width;
  this.height=height;
  World.add(world,this.body);
}display(){
var pos=this.body.position;
fill('red');
strokeWeight(1);
stroke('black');
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);

}



}