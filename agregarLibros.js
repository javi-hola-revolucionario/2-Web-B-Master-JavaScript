let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo)
}

agregarLibro("El Alquimista")
agregarLibro("IT de Stephen King")
agregarLibro("El mejor libro de la historia")


function mostrarLibrosLeidos(){
    librosLeidos.forEach((titulo,i) => { 
        console.log(`${i + 1}. ${titulo}`);
    })
}

mostrarLibrosLeidos();