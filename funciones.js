function nombreDescriptivo (parametros) { 
    //Lo que va hacer mi funcion
}

function saludar (nombre) { //Nombre es un parametro
    return 'Hola ' + nombre;
}

saludar('Javi');

console.log(saludar('Ana'));

let saludo = saludar('Fatima');
console.log(saludo);

function sumar(a,b) { 
    console.log(a + b);
}

sumar(2,3);

function restar(num1, num2){
    let Resultado = num1 - num2;
    return Resultado; // Este variable es local
}

console.log(restar(10,7));

let resultado; // Variable global

function sinReturn (){
    let x = 5;
}

// Logra ejectar la funcion pero NO regresa nada
console.log(sinReturn()) // undefined

function multiplicar (dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)) // Not a number, hace falta pasarle un argumento

console.log('Ana') // error de variable no definido

// Arrow function - functio de flecha

const dividir =(a, b) => a / b; 

console.log(dividir(15,2));

const suma = (a,b) => { //una funcion mas larga con {} no tiene return automatico
    return a = b;
}

console.log(suma(3,4));

const multi = (a,b) => {return a *b}

console.log(multi(10,5));

// Funcion anonima (no necesitas darle nombre, ejecuta algo puntual)

//Callbacks
setTimeout(function () {
    console.log("Esto se ejecuta despues....")
},2000);

// CUANDO NO UTILIZAR FUNCIONES ANONIMAS
/* Se tiene que reutilizar muchas veces
Tiene logica grande
Necesita ser testeada
Se necesita claridad*/


function mascotas(a,b,c) { 
    console.log("Nombres de las mascotas: ", a + b + c )
}

mascotas('Puppy', 'Bombon', 'Milaneso')

console.log("-----------Generar Fibonacci--------");

// Funcion para generar numeros fibonacci
function fibonacci(n){
    let serie = [];// Arreglo vacio

    if (n >= 1) serie.push(0);
    if (n >= 2) serie.push(1);

    for (let i = 2; i < n; i++){ // Empieza desde la posicion 2 porque la 0 y 1 ya existen
        serie.push(serie[i-1] + serie[i-2]);// suma los dos numeros anteriores y agrega el resultado al arreglo
    }
    return serie; // Devuelve la serie
};
console.log(fibonacci(5));
console.log(fibonacci(8));
