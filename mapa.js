//0 = nada 1=bloque 2= moneda 3= reloj p= personaje   a = agua
//- = nada *= bloque
function Mapa(){ 
  this.filas = 17;
  this.columnas = 16;
  //matrix del mapa
  this.map = [['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
              ['1','2','0','1','3','2','2','2','2','2','2','3','1','0','2','1'],
              ['1','1','0','0','1','1','1','0','0','1','1','1','0','0','0','1'],
              ['1','0','0','1','2','2','2','0','0','2','2','2','1','0','0','1'],
              ['1','0','1','1','2','0','0','1','1','0','0','2','1','1','0','1'],
              ['1','2','0','1','2','0','0','0','0','0','0','2','1','0','2','1'],
              ['1','1','0','0','0','1','0','3','3','0','1','0','0','0','1','1'],
              ['1','1','0','0','0','1','0','3','3','0','1','0','0','0','1','1'],
              ['1','2','0','1','2','0','0','0','0','0','0','2','1','0','2','1'],
              ['1','2','1','1','2','0','0','1','1','0','0','2','1','1','2','1'],
              ['1','2','0','1','2','2','2','0','0','2','2','2','1','0','2','1'],
              ['1','1','0','0','1','1','1','0','0','1','1','1','0','0','1','1'],
              ['e','2','2','2','0','0','0','0','0','0','0','0','2','2','2','E'],
              ['1','0','1','1','1','1','1','0','0','1','1','1','1','1','0','1'],
              ['1','0','0','0','0','0','0','0','p','0','0','0','0','0','0','1'],
              ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
              ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a']];
}