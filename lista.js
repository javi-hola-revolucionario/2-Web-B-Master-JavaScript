// Paso 1) Seleccionar mis elementos que voy a ocupar

let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let itemList = document.getElementById("itemList");


// Paso 2) Crear mi funcion
function addItemButtonClick(){
    let itemText =itemInput.value;

    let newItem = document.createElement('li');

    // Crear un element span
    
    let textSpan = document.createElement("span");
    textSpan.textContent = itemText;
    newItem.appendChild(textSpan)

    // Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent= 'Eliminar'
    

    deleteButton.addEventListener('click', function(){
        newItem.remove();
    })

    newItem.appendChild(deleteButton)
    itemList.appendChild(newItem)
    itemInput.value = '';
}

 addItemButton.addEventListener('click', addItemButtonClick);