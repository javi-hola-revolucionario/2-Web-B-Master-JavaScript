// 1) Seleccionamos elementos del DOM (inputs, boton y mensaje)
const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const msg = document.getElementById("msg");

// 2) Seleccionamos las 4 listas por separado (una por cuadrante)
const urgentList = document.getElementById("list-urgent");
const importantList = document.getElementById("list-important");
const laterList = document.getElementById("list-later");
const nextList = document.getElementById("list-next");

/**
 * Crea un <li> con:
 * - Un <span> con el texto de la tarea
 * - Un boton "Eliminar" para borrar SOLO ese <li>
 */

function createTaskItem(text) {
    const li = document.createElement("li");
    li.classList.add("item");
}

