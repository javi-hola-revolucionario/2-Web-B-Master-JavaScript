// Seleccionados nuestros elementos del DOM mediante ID

const titulo =document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementsByClassName("texto");
console.log(texto);

const caja = document.getElementById("caja")
console.log(caja);

const btnClase = document.getElementById("btnClase");
const btnTexto = document.getElementById("btnTexto");
const btnColor = document.getElementById("btnColor");
const btnOcultar = document.getElementById("btnOcultar");

const btnSubmit = document.getElementById("btnSubmit");

const form = document.getElementById("form");

// Cambiar de texto

btnTexto.addEventListener("click", () =>{
    titulo.textContent ='Cambiaste el texto desde Javascript'
});

// Cambiar de color

btnColor.addEventListener("click", () =>{
    titulo.style.color = 'purple';
    caja.style.backgroundColor = 'pink';
});

// Para ocultar mi caja
btnOcultar.addEventListener("click", () =>{
    if(caja.style.display === "none"){
        caja.style.display = "block";
    } else {
        caja.style.display = 'none';
    }
});

// Cambiar de clase
btnClase.addEventListener("click", () => {
    caja.classList.toggle("activa"); // cambia el estado visual
});

// Funcion del boton

btnSubmit.addEventListener("click", () => {
    document.body.style.back
})

