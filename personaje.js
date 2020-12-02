function Personaje(x, y) {//constructor personaje
  this.x = x;
  this.y = y;
  this.direction = 0;
  this.radius = 16;
  this.show = function () {
    /*image(personajeimg,32*this.frame++,32*this.direction,32,32,this.x,this.y,32,32)
    this.frame = (this.frame===4)?0:this.frame;*/
    imgxd=Math.floor(Math.random() * (5 - 1)) + 1; //escoje un color random
    //cambia dizfraces bien cool xd
     if(imgxd===1){
       image(personajeimg,this.x,this.y);
     }
    if(imgxd===2){
       image(personajeimg2,this.x,this.y);
     }
     if(imgxd===4){
       image(personajeimg4,this.x,this.y);
     }
     if(imgxd===3){
       image(personajeimg3,this.x,this.y);
     }
  }
//traduce el movimiento enviado por el sketch a una pocision en el mapa
  this.move = function (d) {
    this.direction = d;
    if (this.direction === 0) { // 0 = derecha
      this.x += 32; //se mueve un espacio a la derecha (32 pixeles)
      
    }
    if (this.direction === 1) {  //1 = abajo
      this.y += 32; //se mueve un espacio hacia abajo (32 pixeles)
      
    }
    if (this.direction === 2) { // 2 = izquierda
      this.x -= 32; //se mueve un espacio a la izquierda (32 pixeles)
      
    }
    if (this.direction === 3) {  //3 = arriba
      this.y -= 32; //se mueve un espacio hacia arriba (32 pixeles)
      
    }
  }
//detecta si el personaje esta sobre una la comida
  this.comer = function(comida){
    var dis = dist(this.x,this.y,comida.x,comida.y);
    
    if(dis < 20){
      console.log("real");
      console.log(this.radius + comida*16);
      return true;
    }else{
      return false;
    }
  }

  this.colission = function(ola){ //detecta si el personaje esta colisionando con la ola
    var dis = dist(this.x,this.y,ola.x,ola.y);
    if(dis < this.radius + ola.radius){
      return true;
    }else{
      return false;
    }
  }
}