const contenedor =document.getElementsByClassName("contenedor");
const form = document.getElementById("form");
const comentario = document.getElementById("comentario");
const listaComentarios = document.getElementById("listaComentarios");

form.addEventListener("submit", function(evento) {
    
    // Evitar que el formulario se envíe y recargue la página
    evento.preventDefault();
    const texto = comentario.value;

    // Crear un nuevo elemento de comentario y agregarlo a la lista
    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;
    divComentario.appendChild(pTexto);
    listaComentarios.appendChild(divComentario);
    comentario.value = "";

    const fecha = document.createElement("span");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();
    divComentario.appendChild(fecha);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btnEliminar");
    divComentario.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", function() {
        listaComentarios.removeChild(divComentario);
    });
});

