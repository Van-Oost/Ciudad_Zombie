/* Aca podes encontrar al zombie caminante cuyo codigo esta completo. Podes
modificarlo para hacer que se comporte de la forma que mas te guste.
Este zombie recibe los mismos parametros que el objeto Enemigo. Podes consultar
el archivo Enemigo.js para entender que es cada uno. */

var ZombieCaminante = function(sprite, x, y, ancho, alto, velocidad, rangoMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
}

ZombieCaminante.prototype = Object.create(Enemigo.prototype);
ZombieCaminante.prototype.constructor = ZombieCaminante;

ZombieCaminante.prototype.mover = function() {
  /* Los movimientos estan basados en un numero aleatorio
  La direccion horizontal es siempre la misma y va ondulando verticalmente.
  Esto hasta llegar a sus limites, donde se invierte su direccion horizontal */
  if (Math.random() < 0.5) {
    this.x -= this.velocidad;
    this.y -= this.velocidad*2;
  } else {
    //Sino, hace otro movimiento
    this.y += this.velocidad;
    this.x -= this.velocidad*2;
  }

  /* En esta parte lo que hacemos es invertir la direccion horizontal si
  toca uno de sus limites, modificando su velocidad. Si multiplicamos por -1 la
  velocidad lo que estamos haciendo es invertir su direccion.*/
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
    cambiarDireccion.call(this);
  }
  // Si sobrepasa el rangoY, lo manda al centro entre ambos rangos
  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)) {
    this.y = this.rangoMov.desdeY + (this.rangoMov.hastaY - this.rangoMov.desdeY)/2;
  }
}

function cambiarDireccion(){
  if (this.sprite=="imagenes/zombie1.png"){
    this.sprite = "imagenes/zombie11.png";
  } else if (this.sprite=="imagenes/zombie11.png"){
    this.sprite = "imagenes/zombie1.png";
  } else if (this.sprite=="imagenes/zombie2.png"){
    this.sprite = "imagenes/zombie22.png";
  } else if (this.sprite=="imagenes/zombie22.png"){
    this.sprite = "imagenes/zombie2.png";
  } else if (this.sprite=="imagenes/zombie3.png"){
    this.sprite = "imagenes/zombie33.png";
  } else if (this.sprite=="imagenes/zombie33.png"){
    this.sprite = "imagenes/zombie3.png";
  } else if (this.sprite=="imagenes/zombie4.png"){
    this.sprite = "imagenes/zombie44.png";
  } else if (this.sprite=="imagenes/zombie44.png"){
    this.sprite = "imagenes/zombie4.png";
};
}