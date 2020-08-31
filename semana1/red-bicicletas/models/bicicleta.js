var Bicicleta = function(id, color, modelo, ubicacion, ciudad) {
  this.id = id;
  this.color = color;
  this.modelo = modelo;
  this.ubicacion = ubicacion;
  this.ciudad = ciudad;
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


/* Crete two bicis in barranquilla and add to list */
var a = new Bicicleta(1, 'blue', 'clasic', [11.016565, -74.790201], "barranquilla");
var b = new Bicicleta(2, 'blue', 'clasic', [11.026085, -74.799943], "barranquilla");
Bicicleta.add(a);
Bicicleta.add(b);

/* Crete two bicis in santamarta and add to list */
var c = new Bicicleta(3, 'blue', 'clasic', [11.242083, -74.215416], "santamarta");
var d = new Bicicleta(4, 'blue', 'clasic', [11.248606, -74.215206], "santamarta");
Bicicleta.add(c);
Bicicleta.add(d);

/* Crete two bicis in cartagena and add to list */
var e = new Bicicleta(5, 'blue', 'clasic', [10.430245, -75.547298], "cartagena");
var f = new Bicicleta(6, 'blue', 'clasic', [10.417171, -75.551866], "cartagena");
Bicicleta.add(e);
Bicicleta.add(f);


/* export models for can use anywhare */
module.exports = Bicicleta;
