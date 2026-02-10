let i = 1;

while (i <= 3 ){
    console.log("while", i);
    i++;    // i =i + 1; VARIABLE DE CONTROL
}


let entrada = "";

while (entrada !== 'salir'){
    entrada = prompt ('escribe algo')
}

console.log ('yeih saliste')

console.log("---------------------------------------");

//Arrays

let frutas = ['Manzana', 'Pera','lulo', 'cereza','papaya'];

console.log(frutas[2]);

console.log(frutas.length);

for (let indice = 0; indice < frutas.length; indice++){
    console.log("fruta = ", frutas[indice])
}