/* 
localStorage: nos va permitir guardar datos del usuario
NO se van a borrar al cerrar la pestaña o el navegador
Solo se van a eliminar si el usuario borra el cache o los datos
Funciona por dominio

## SOLO guarda STRINGS (Texto)##
Si queremos guardar objetos//arrays debemos convertir a JSON
localStorage.setItem("usuario", JSON.stringify(objeto));
PARA RECUPERARLO
"".getItem"

API WEB Storage de JavaScript

Clave ---> valor

nombre --> Ana 
idioma --> Español

localStorage.SetItem("clave", "valor");

OBTENER DATOS
localStorage.getItems("clave");
SI NO EXISTE LA CLAVE, va a devolver NULL

ELIMINAR DATOS
localStorage.removeItems("clave");

SI QUEREMOS BORRAR TODO EL ALMACENAMIENTO
localStorage.clear();

Cuando NO debemos de usarlo: 
- Datos sensibles como contraseñas
- Informacion muy grande
- Seguridad critica

TODO ESTAS COSAS DE ABAJO SON DIFERENTES:
- localStorage
- sessionStorage
- cookies
*/

// Seleccionar nuestros elementos del DOM

let txt = document.getElementById("texto");
let fechaP = document.getElementById('fecha');
let btnGuardar = document.getElementById('guardar');
let btnEliminarr = document.getElementById('eliminar');
const pensamientosList = document.getElementById('pensamientos-list');
const sinPensamientos = document.getElementById('sin-pensamientos');

// Declarar la clave donde se van a guardar en localStorage
const CLAVE_PENSAMIENTOS = "diario_pensamientos";

// Variable para controlar si estamos editando
let editandoId = null;

// Declarar las claves donde se van a guardar en localStorage

const CLAVE_TEXTO = "diario_texto";
const CLAVE_FECHA = "diario_fecha"

// Funcion para obtener la fecha del dia de hoy

function fechaSoloDia () {
    let hoy = new Date(); // Creamos un objeto con la fecha actual
    return hoy.toLocaleDateString('es-MX')
}

// Funcion para obtener todos los pensamientos del localStorage
function obtenerPensamientos() {
    const datos = localStorage.getItem(CLAVE_PENSAMIENTOS);
    return datos ? JSON.parse(datos) : []; 
    // Operador ternario: Si datos existe, lo parseamos, si no, devolvemos un array vacio
}

// Funcion para guardar pensamientos en localStorage
function guardarEnLocalStorage(pensamientos) {
    localStorage.setItem(CLAVE_PENSAMIENTOS, JSON.stringify(pensamientos));
}

// Funcion para generar un ID unico
function generarID() {
    return Date.now().toString();
}


function cargar() {
    let textoGuardado = localStorage.getItem(CLAVE_TEXTO)
    let fechaGuardada = localStorage.getItem(CLAVE_FECHA)

    if(textoGuardado){
        txt.value = textoGuardado;
    }

    if (fechaGuardada){
        fechaP.textContent = 'Guardado el: ' + fechaGuardada;
    } else {
        fechaGuardada.textContent = '';
    }
}

// Para darle click en Guardar 
btnGuardar.onclick = () => {
    let texto = txt.value.trim(); // Para quitar espacios

    if (!texto) return;

    let hoy = fechaSoloDia(); // Funcion que creamos para obtener el dia

    // Guardado como string
    localStorage.setItem(CLAVE_TEXTO, texto)
    localStorage.setItem(CLAVE_FECHA, hoy)

    fechaP.textContent = 'Guardado el: ' + hoy;
};

// Para darle click en Eliminar
btnEliminarr.onclick = () => {
    localStorage.removeItem(CLAVE_TEXTO)
    localStorage.removeItem(CLAVE_FECHA)

    txt.value = '';
    fechaP.textContent = '';
};

cargar(); // Llama a la funcion cargar al incio para mostrar lo que ya estaba guardado