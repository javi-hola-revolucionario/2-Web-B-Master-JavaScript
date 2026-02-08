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

let a = 10;
let b = 3;
let c = a % b;
console.log(c);