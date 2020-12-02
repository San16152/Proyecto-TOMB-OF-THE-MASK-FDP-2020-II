function Comida(x,y){//constructor de comida
  this.x = x;
  this.y = y;

  this.show = function(){//imagen de la comida y su pocision
    image(comidaimg,x,y);
  }
}