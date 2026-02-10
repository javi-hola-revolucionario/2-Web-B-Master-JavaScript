let edad = 20;
let tieneINE = false;

//Condicion que queremos que se cumpla
if (edad >=18){
    console.log("Eres mayor de edad");
}else {
    console.log("eres menor de edad");
}

let calificacion = 9;

if (calificacion >= 9){
    console.log("Eres increible")
} else if (calificacion >= 6) {
    console.log("pansaste ...")
} else {
    console.log ("reprobado")
}

// AND (y) &&
// OR (o) ||
// NOT (negacion) !

if (edad >=18 && tieneINE){
    console.log("puedes votar");
} else {
    console.log("no puedes votar");
}

let numero = prompt('ingresa un numero:');

numero = parseInt(numero);

//Si queremos preguntar si es divisible o  no entre 2

if (numero % 2 === 0){
    console.log('es divisible entre 2')
} else {
    console.log('no es divisible entre dos')
}

console.log()

let esPremium = true;
let totalCompra = 350;
let esFinDeSemana= false;

if ( esPremium || (totalCompra > 1000 && esFinDeSemana )) {
    console.log('Descuento aplicado')
} else {
    console.log('No aplica el descuento')
}