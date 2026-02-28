// DOM references
let btnGenerar = document.getElementById('submit');
const cantidadCaracteres = document.getElementById('cantidad_caracteres');
const incluirMayus = document.getElementById('incluir_mayus');
const incluirMinus = document.getElementById('incluir_minus');
const incluirNumeros = document.getElementById('incluir_numeros');
const incluirSimbolos = document.getElementById('incluir_simbolos');
const lengthValue = document.getElementById('length-value');
const copyButton = document.getElementById('copy-password');
const toggleButton = document.getElementById('toggle-password');
const outputField = document.getElementById('current-password');

// State for password visibility
let passwordVisible = false;
let generatedPassword = '';

function GeneradorContraseña() {
    const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minusculas = "abcdefghijklmnopqrstuvwxyz";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let caracteres = "";

    if (incluirMayus.checked) {
        caracteres += mayusculas;
    }
    if (incluirMinus.checked) {
        caracteres += minusculas;
    }
    if (incluirNumeros.checked) {
        caracteres += numeros;
    }
    if (incluirSimbolos.checked) {
        caracteres += simbolos;
    }

    // si no se seleccionó ningún conjunto de caracteres
    if (caracteres === "") {
        return "";
    }

    let contraseña = "";
    for (let i = 0; i < cantidadCaracteres.value; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contraseña;
}

// actualiza el número mostrado junto al slider
function actualizarLongitud() {
    lengthValue.textContent = cantidadCaracteres.value;
}

// mostrar/ocultar la contraseña
function togglePasswordVisibility() {
    if (generatedPassword === '') {
        alert('Primero genera una contraseña');
        return;
    }
    
    passwordVisible = !passwordVisible;
    
    if (passwordVisible) {
        outputField.textContent = generatedPassword;
        toggleButton.textContent = '🙈'; // ojo cerrado
    } else {
        outputField.textContent = '•'.repeat(generatedPassword.length); // puntos
        toggleButton.textContent = '👁️'; // ojo abierto
    }
}

cantidadCaracteres.addEventListener('input', actualizarLongitud);

btnGenerar.addEventListener('click', function(event) {
    event.preventDefault();

    if (!incluirMayus.checked && !incluirMinus.checked && !incluirNumeros.checked && !incluirSimbolos.checked) {
        alert('Selecciona al menos un tipo de carácter.');
        return;
    }

    generatedPassword = GeneradorContraseña();
    passwordVisible = false;
    outputField.textContent = '•'.repeat(generatedPassword.length);
    toggleButton.textContent = '👁️'; // reset al ojo abierto
});

toggleButton.addEventListener('click', function(event) {
    event.preventDefault();
    togglePasswordVisibility();
});

copyButton.addEventListener('click', function(event) {
    event.preventDefault();
    if (generatedPassword === '') {
        alert('Primero genera una contraseña');
        return;
    }
    navigator.clipboard.writeText(generatedPassword)
        .then(() => alert('Contraseña copiada al portapapeles'))
        .catch(err => console.error('Error copiando al portapapeles', err));
});

// initialize the length display when the script loads
actualizarLongitud();

