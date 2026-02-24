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

// nos quedamos en minuto 33:20