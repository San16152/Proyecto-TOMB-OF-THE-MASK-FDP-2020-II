function Agua(x, y) {//constructor
  this.x = x;
  this.y = y;
  this.direction = 0;
  this.radius = 1;
  this.subir = true;

  this.show = function () {//muestra la imagen
    image(aguaimg,this.x,this.y,32,544)
  }

  this.move = function(){ //recibe si el movimiento es disminuyendo y = subir o aumenta y =bajar
        if(this.subir == true){
            this.y -= 0.16;
        } else {
            this.y += 0.16;
        }
    }

  
}