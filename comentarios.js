const form = document.getElementById("form");
const textarea = document.getElementById("comentario");
const lista = document.getElementById("contenedor");

form.addEventListener("submit", (evento) => {
    evento.preventDefault(); 
    const texto = textarea.value;

    const divComentario = document.createElement("div");
    divComentario.classList.add("comentario");
    const pTexto = document.createElement("p");
    pTexto.textContent = texto;
    divComentario.appendChild(pTexto);
    lista.appendChild(divComentario);
    textarea.value = "";

    const fecha = document.createElement("div");
    fecha.classList.add("fecha");
    fecha.textContent = new Date().toLocaleString();
    divComentario.appendChild(fecha);

    const btnEliminar =document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar");
    divComentario.appendChild(btnEliminar);

    btnEliminar.addEventListener("click", () => {
        divComentario.remove();
    })


});