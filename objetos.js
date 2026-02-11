// Un objeto es una coleccion de pares clave - valor (propiedades)

const disco = {
    // Propiedades (dato de disco)
    titulo: "Nectar", 
    artista: "Joji",
    anio: 2020,
    disponible: true,
    // Propiedad de tipo arreglo
    canciones: ['ew', 'gimme love', 'run', 'sanctuary', '777', 'your man'],
    // Podemos guardar acciones relacionadas con los datos

    // Metodo que mestra la informacion
    mostrarInfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`)
        // this apunta a ESTE objeto (disco)
    },

    // Metodo que liste las canciones
    mostrarCanciones(){
        this.canciones.forEach((cancion, i) => {
            console.log(`${i +1}. ${cancion}`);
        }
    ) },

    //Agregar una cancion
    agregarCacnion(nombre){
        this.canciones.push(nombre);
        console.log(`Cancion agregada: ${nombre}`);
    },

    //        eliminarCancion(cancion){
    //            this.canciones.pull(cancion)
    //            console.log(`Cancion eliminada: ${cancion}`);
    //        },

    //        cambiarDisponibilidad () {
    //            this.disponible(false)
    //            console.log(`Disponibilidad cambiada; ${disponible}`);
    //        }

    //Ejercicio:
    //Eliminar cancion
    //Cambiar estado de disco a No disponible

}

// Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

// Acceder a los datos con notacion de corchetes
console.log(disco['titulo']);
console.log(disco['disponible']);

disco.mostrarInfo();

disco.mostrarCanciones();

disco.agregarCacnion('Upgrade');

disco.mostrarCanciones();

//disco.eliminarCancion();

//disco.cambiarDisponibilidad();

// Destructurar es SACAR cosas de un objeto SIN necesidad de escribir objeto.propiedad

const {canciones } = disco;
const [ primera, segunda, tercera] = canciones;
// Saca el arreglo y luego saca los elementos del arreglo

console.log(primera);
console.log(segunda);
console.log(tercera);

console.log('-----------------------');

const {canciones: [pista1, pista2, pista3] } = disco;
console.log(pista1);
console.log(pista2);
console.log(pista3);

// Error comun: Desestructurar NO crea datos, solo los extrae


// Renombrar variables
const { titulo: nombreDisco, anio: Lanzamiento } = disco;
// Se asigna el valor de la propiedad a una variable con otro nombre
console.log(nombreDisco)
console.log(Lanzamiento)

// Desestructuracion basica
const {titulo, artista} = disco;

console.log(titulo);
console.log(artista);
