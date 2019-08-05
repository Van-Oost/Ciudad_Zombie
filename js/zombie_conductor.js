/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, direccion, rangoMov) {
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

ZombieConductor.prototype.mover = function() {
  if (this.direccion == "horizontal") {
    this.x += this.velocidad;
    if ((this.x < (this.rangoMov.desdeX-200) ) || (this.x > this.rangoMov.hastaX+200)){
      this.velocidad *= -1;
    };
  } else if (this.direccion =="vertical") {
    this.y+= this.velocidad;
    if ((this.y < this.rangoMov.desdeY-200) || (this.y > this.rangoMov.hastaY+200)){
      this.velocidad *= -1;
    }
  }

  ZombieConductor.prototype.atacar = function(jugador) {
    jugador.perderVidas(jugador.vidas);
  }
};
