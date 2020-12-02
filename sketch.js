//variables
var bloqueimg;
var comidaimg;
var relojimg;
var personajeimg;
var enemigobloqueimg;
var enemigobloqueimg2;
var maps;
var bloques = [];
var bloqueE;
var bloqueE2;
var comidas = [];
var relojs = [];
var personaje;
var aguaimg;
var agua;
var aguas = [];
var subir = false;
var monedas = 0;



//cargamos las imagenes
function preload() {
  bloqueimg = loadImage("images/bloque.bmp");
  comidaimg = loadImage("images/comida.bmp");
  relojimg = loadImage("images/reloj.bmp");
  personajeimg = loadImage("images/tombJS.bmp");
  personajeimg2 = loadImage("images/tombjs2.png");
  personajeimg3 = loadImage("images/tombjs3.png");
  personajeimg4 = loadImage("images/tombjs4.png");
  enemigobloqueimg = loadImage("images/bloqueEnemigo.bmp");
  enemigobloqueimg2 = loadImage("images/bloqueEnemigo2.bmp");
  aguaimg = loadImage("images/ola.png");
}
//cargamos el mapa
function setup() {
  
  createCanvas(544, 512);
  maps = new Mapa();
  subir = true

  for (var i = 0; i < maps.filas; i++) {
    for (var j = 0; j < maps.columnas; j++) {
      if (maps.map[i][j] === '1') {  //bloques
        bloques.push(new Bloque(j * 32, i * 32))
      }
      if (maps.map[i][j] === '2') { //puntos
        comidas.push(new Comida((j * 32) + 14, (i * 32) + 14))
      }
      if (maps.map[i][j] === '3') {  //reloj devuelve agua
        relojs.push(new Reloj((j * 32) + 8, (i * 32) + 8))
      }
      if (maps.map[i][j] === "p") { //personaje
        personaje = new Personaje(j * 32, i * 32)
      }
      if (maps.map[i][j] === 'e') {  //bloques
        bloqueE = new Enemigobloque(j * 32, i * 32)
      }
      if (maps.map[i][j] === 'E') {  //bloques
        bloqueE2 = new Enemigobloque2(j * 32, i * 32)
      }
      if (maps.map[i][j] === 'a') {  //agua
        aguas.push(new Agua(j * 32, i * 32))
      }
    }
  }
}
//muestra las imagenes en pantalla
function draw() {
  background(0);
  for (var i = 0; i < bloques.length; i++) {
    bloques[i].show();
  }
  for (var i = 0; i < comidas.length; i++) {
    comidas[i].show();
  }
  /*for (var i = 0; i < aguas.length; i++) {
    aguas[i].show();
    aguas[i].move(true);
    subirAgua(3);
  }*/
  for (var i = 0; i < relojs.length; i++) {
    relojs[i].show();
  }
  //muestra el personaje donde esté la letra p
  personaje.show();
  bloqueE.show();
  bloqueE2.show();
  for (var i = 0; i < comidas.length; i++) {
    if (personaje.comer(comidas[i])) {
      comidas.splice(i, 1);
      // insertar audio v: de tiring
      monedas++
      console.log(monedas)
      if (comidas.length === 0) {
        swal({
          title: monedas,
          text: "ha sido su puntuacion",
        });
        window.location = "win.html";
      }
    }
  }
  //comerse los relojs
  for (var i = 0; i < relojs.length; i++) {
    if (personaje.comer(relojs[i])) {
      relojs.splice(i, 1);
      //console.log("devolver agua");// insertar audio v: de tiring
      let moverAgua = subirAgua(false);
      do {
        setTimeout(() => { subirAgua(true) }, 3000);
      } while (moverAgua)
    }
  }
  function subirAgua(d) { // d = direccion
    for (var i = 0; i < aguas.length; i++) {
      aguas[i].subir = d;
    }
  }

//detectar cuando hay colision con la ola para terminar el juego
  for (var i = 0; i < aguas.length; i++) {
    aguas[i].move(true);
    aguas[i].show();
    if (personaje.colission(aguas[i])) {
      swal({
        title: monedas,
        text: "ha sido su puntuacion",
      });
      window.location = "end.html";
    }
  }
}

//captura las teclas presionadas y avisa al personaje
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    if (maps.map[personaje.y / 32][personaje.x / 32 + 1] !== "1") {  //prevee si hay muros
      personaje.move(0);
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (maps.map[personaje.y / 32 + 1][personaje.x / 32] !== "1") {  //prevee si hay muros
      personaje.move(1);
    }

  }
  if (keyCode === LEFT_ARROW) {
    if (maps.map[personaje.y / 32][personaje.x / 32 - 1] !== "1") {  //prevee si hay muross
      personaje.move(2);
      //console.log("izquierda");
      //agua.move(0);
    }
  }
  if (keyCode === UP_ARROW) {
    if (maps.map[personaje.y / 32 - 1][personaje.x / 32] !== "1") { //prevee si hay muros
      personaje.move(3);
      //console.log("arriba");
    }
  }
}
