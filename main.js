// Este es un comentario en JavaScript

// Tipos de datos

// number: enteros y decimales

let edad = 24;
let precio = 199.99;

console.log("Number:");
console.log(edad);
console.log(precio);

console.log(typeof edad);
console.log(typeof precio);

// String (texto)

let nombre = "Javier";
let saludo = "Hola mundo";
console.log("Tipo de dato String:");
console.log(nombre);
console.log(saludo);
console.log(typeof nombre);
console.log(typeof saludo);

// Boolean (verdadero y falso)

let esMayorDeEdad = "true";
let tienePermiso = "false";
console.log("Tipo de dato Boolean:");
console.log(esMayorDeEdad);
console.log(tienePermiso);
console.log(typeof esMayorDeEdad);

// Undefined (variable declarada sin valor)

let telefono;
console.log("Tipo de dato Undefined:");
console.log(telefono);
console.log(typeof telefono);

// Null (valor intencionalmente vacio)
console.log("Tipo de dato Null")

let direccion = null;
console.log(direccion);
console.log(typeof direccion);

// sale object porque es un error historico de javascript, que no se corrigio.
// null no es un objeto solo esta indicando una ausencia de valor

// Object (estructura de datos con propiedades)

let persona = {
    nombre: "Diego",
    edad: "22",
    cuidad: "CDMX"
};

console.log ("Tipo de dato Objetc:");
console.log(typeof persona);
console.log(persona);

//Symbol

let id = Symbol("id");
console.log("Tipo de dato Symbol:");
console.log(id);
console.log(typeof id);


