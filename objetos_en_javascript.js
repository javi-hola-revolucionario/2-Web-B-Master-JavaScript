// Crear un objeto libro que contenga varias propiedades y un metodo para imprimir la informacion basica del libro

const libro = {
    titulo: "El visitante",
    autor: "Stephen king",
    anio: 2018,
    estado: true,

    capitulos: ['La detencion','lo siento','lacomparecencia','amarillo','holly','macys se lo cuenta a gimbels'],

    describirLibro() {
        console.log(`${this.titulo} de ${this.autor}, publicado en ${this.anio}`)
    },
    // Listar los capitulos
    mostrarCapitulos() {
        this.capitulos.forEach((capitulo, i) =>{
            console.log(`${i +1}. ${capitulo} `);
        })
    }
    
}

libro.describirLibro();
libro.mostrarCapitulos();