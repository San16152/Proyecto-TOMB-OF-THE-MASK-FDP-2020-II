function Agua(x, y) {
  this.x = x;
  this.y = y;
  this.direction = 0;
  this.radius = 1;
  this.subir = true;

  this.show = function () {
    image(aguaimg,this.x,this.y,32,544)
  }

  this.move = function(){ //Mover el aqua en el eje Y unicamente.
        if(this.subir == true){
            this.y -= 0.16;
        } else {
            this.y += 0.16;
        }
    }
//traduce el movimiento enviado por el sketch a una pocision en el mapa
 /* this.move = function () {
    if(subir===3){
      this.y -= 32;
    }else{
      this.y += 32;
    }
  }*/

  
}