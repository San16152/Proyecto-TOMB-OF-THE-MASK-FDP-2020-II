function Comida(x,y){
  this.x = x;
  this.y = y;

  this.show = function(){
    image(comidaimg,x,y);
  }
}