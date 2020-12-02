function Reloj(x,y){
  this.x = x;
  this.y = y;

  this.show = function(){
    image(relojimg,this.x,this.y);
  }
}