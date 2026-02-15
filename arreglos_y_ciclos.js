// Declara un arreglo llamado frutas con varios tipos de frutas
let frutas =['manzana', 'platano', 'guayaba']

// Crea un objeto para alamacenar la cantidad de cada tipo de fruta.

let suma_de_fruta = 0;

// Usa un ciclo for/while para recorrer el arreglo y contar las frutas

while (suma_de_fruta < frutas.length) {
    console.log(suma_de_fruta);
    suma_de_fruta++;
}

// imprime en la consola la cantidad de cada tipo de fruta

// opcional: intenta implementar la solucion con el otro ciclo tambien (for/while)

for (let i = 1; i <= frutas; i++){
    suma_de_fruta +=i;
}
console.log('Resultado con for: ')
console.log(suma_de_fruta);