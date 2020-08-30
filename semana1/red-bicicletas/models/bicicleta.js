var Bicicleta = function(id, color, modelo, ubicacion) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function() {
  return 'id: ' + this.id + " | color: " + this.color;
}

/* list to save all objetc and his method for add to list */
Bicicleta.allBicis = [];
Bicicleta.add = function(aBici) {
  Bicicleta.allBicis.push(aBici);
}

/* funtion for find in the list for id */
Bicicleta.findById = function(aBiciId){
  for (var i = 0; i < Bicicleta.allBicis.length; i++){
    if (Bicicleta.allBicis[i].id == aBiciId){
       return Bicicleta.allBicis[i];
    }
  }
  return "valor no encontrado"
}


/* Create the remove funtion */
Bicicleta.removeById = function(aBiciId){
  for (var i = 0; i < Bicicleta.allBicis.length; i++){
    if (Bicicleta.allBicis[i].id == aBiciId){
      Bicicleta.allBicis.splice(i, 1);
      break;
    }
  }
}


/* Crete two bicis and add to list */
var a = new Bicicleta(1, 'blue', 'clasic', [-34.6012424, -58.381497]);
var b = new Bicicleta(2, 'blue', 'clasic', [-34.596932, -58.3808287]);
Bicicleta.add(a);
Bicicleta.add(b);


/* export models for can use anywhare */
module.exports = Bicicleta;
