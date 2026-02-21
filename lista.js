// Paso 1) Seleccionar mis elementos que voy a ocupar

//Urgentes
let itemInput1 = document.getElementById("itemInput1");
let addItemButton1 = document.getElementById("addItemButton1");
let itemListUrgentes = document.getElementById("itemListUrgentes");

//Importantes
let itemInput2 = document.getElementById("itemInput2");
let addItemButton2 = document.getElementById("addItemButton2");
let itemListImportantes = document.getElementById("itemListImporantes");

//Despues
let itemInput3 = document.getElementById("itemInput3");
let addItemButton3 = document.getElementById("addItemButton3");
let itemListDespues = document.getElementById("itemListDespues");

//sigsemana
let itemInput4 = document.getElementById("itemInput4");
let addItemButton4 = document.getElementById("addItemButton4");
let itemListSigSemana = document.getElementById("itemListSigSemana");


// Paso 2) Crear mi funcion
function addItemButtonClick1(){
    let itemText =itemInput1.value;
    let newItem1 = document.createElement('li');

    // Crear un element span
    
    let textSpan = document.createElement("span");
    textSpan.textContent = itemText;
    newItem1.appendChild(textSpan)

    // Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent= 'Eliminar'
    

    deleteButton.addEventListener('click', function(){
        newItem1.remove();
    })

    newItem1.appendChild(deleteButton)
    itemListUrgentes.appendChild(newItem1)
    itemInput1.value = '';
}

 addItemButton1.addEventListener('click', addItemButtonClick1);


 // imporantes-------------------2
function addItemButtonClick2(){
    let itemText2 =itemInput2.value;
    let newItem2 = document.createElement('li');

    // Crear un element span
    
    let textSpan = document.createElement("span");
    textSpan.textContent = itemText2;
    newItem2.appendChild(textSpan)

    // Crear el boton eliminar
    let deleteButton = document.createElement('button');
    deleteButton.textContent= 'Eliminar'
    

    deleteButton.addEventListener('click', function(){
        newItem2.remove();
    })

    newItem2.appendChild(deleteButton)
    itemListImportantes.appendChild(newItem2)
    itemInput2.value = '';
}

 addItemButton2.addEventListener('click', addItemButtonClick2);


 // despues-------------------3

function addItemButtonClick(){
    let itemText =itemInput1.value;
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
    itemInput1.value = '';
}

 addItemButton1.addEventListener('click', addItemButtonClick);