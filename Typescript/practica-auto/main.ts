import { Auto } from "./auto";

let agile = new Auto("Chevrolet", "Agile", 2017, 987123, "blanco");
let clio = new Auto("Renault", "Clio", 2015, 987123, "rojo");
let duster = new Auto("Renault", "Duster", undefined, undefined, undefined);

duster.Anio = 2012;
duster.Chasis = 123987;
duster.Color = "negro"

agile.Encendido = false;

agile.aumentarVelocidad();
agile.encender();
agile.aumentarVelocidad();
agile.aumentarVelocidad();
agile.aumentarVelocidad();
agile.encender();
agile.aumentarVelocidad();
agile.disminuirVelocidad();
agile.apagar();
agile.frenar();
agile.apagar();

var velocidadActualAgile = agile.velocimetro();
console.log(`Velocidad actual de ${agile.Marca} ${agile.Modelo}: ${velocidadActualAgile}`);

agile.informar();

clio.informar();
