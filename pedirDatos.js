console.log("Hola, me llamo Javi")

console.log("Como te llamas");

let nombre = prompt("Como te llmas?");

let fecha = prompt("Cuando es tu cumple");

let mascotas = prompt("Cuantas mascostas tienes");


alert(nombre);
alert(fecha);
alert(mascotas);


//Preguntar cuantos perros tienes
//Preguntar cuantos gatos tienes
//Mostrar como respuesta: Tienes en total x mascostas


let perro = prompt("cuantos perros tienes: ");
let gato = prompt("cuantos gatos tienes: ");

perro = parseInt(perro);
gato = parseInt(gato);

//parseInt() hace que se convierta de strg a numero


let totalMascotas = perro + gato;
console.log("En total tienes: ", totalMascotas, "mascotas");



let hermanos = number(prompt("cuantos hermanos tienes: "));
let hermanas = number(prompt("cuantos hermanas tienes: "));

let totalH = hermanos + hermanas

console.log(totalH)

//number es estricto solol permite numeros y nada de palabras
//number falla cuando se ingresan letras

//parceint es flexible porque permite que se ingresen letras y es tolerable