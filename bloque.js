function Bloque(x,y){//constructor de bloques
this.x = x;
this.y = y;

this.show = function(){ //imagen de bloques
  image(bloqueimg,x,y)
}
}