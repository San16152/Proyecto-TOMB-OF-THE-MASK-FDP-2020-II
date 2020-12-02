function Reloj(x,y){//constructor reloj devuleve tiempo
  this.x = x;
  this.y = y;

  this.show = function(){//imagenes y pocisiones del reloj
    image(relojimg,this.x,this.y);
  }
}