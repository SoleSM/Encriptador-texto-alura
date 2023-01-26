//Definimos las variables de los elementos
let textoInput = document.getElementById('input-mensaje');
let mensajeAlerta = document.getElementById('rule');
let textoOutput = document.getElementById("texto-salida");
let botonCopiar = document.getElementById("boton-copiar");
let mensajeInicio = document.getElementById("mensaje");
let descripcionInicio = document.getElementById("descripcion");


//Cada vez que se detecte una entrada de texto al textarea se va a evaluar lo siguiente:
textoInput.addEventListener('input', () => {
    //Testea que el valor del input coincida con la expresión regular
    //Si no coincide con los caracteres de la expresión el texto sigue negro
    if (!/[^a-z\sñ,.¡!¿?]/.test(textoInput.value)) {
        mensajeAlerta.style.color = "black";
    } else {
        //Si si encuentra una mayuscula o tilde, el texto se muestra rojo
        mensajeAlerta.style.color = "red";
    }
})

function limpiar() {
    //Limpiamos el textarea
    textoInput.value = "";
    //Se ocultan el texto, boton de copiar
    textoOutput.style.display = "none";
    botonCopiar.style.display = "none";
    //Mostrar la imagen y los mensajes iniciales
    mensajeInicio.style.display = "block";
    descripcionInicio.style.display = "block";
    document.getElementById("imagen").style.display= "block";

}

//Función para mostrar el cuadro con el texto encriptado y boton de copiar
function showOutput(texto) {
    // Limpiamos el cuadro de input 
    textoInput.value = "";
    //Ocultamos la imagen y los mensajes iniciales
    document.getElementById("imagen").style.display = "none";
    mensajeInicio.style.display = "none";
    descripcionInicio.style.display = "none";
    //Mostrar el textarea, boton de copiar y el mensaje encriptado
    textoOutput.style.display = "block";
    botonCopiar.style.display = "block";
    textoOutput.value = texto;
}

function validarTextoInput(textoInput) {
    //Probamos que sean letras minusculas y sin tildes
    if (/[^a-z\sñ,.¡!¿?]/.test(textoInput)) {
        alert("Ingrese el mensaje que desea encriptar en minúsculas y sin tildes")
        limpiar();
        return false;
    }
    //Confimamos que haya texto para encriptar 
    else if (textoInput.length === 0) {
        alert("Ingrese un mensaje a desencriptar")
        limpiar();
        return false;
    }
    else {
        return true;
    }
}


function encriptar(txtOrigin) {
    let txtCifrado = txtOrigin.replace(/e/gm, "enter");
    txtCifrado = txtCifrado.replace(/o/gm, "ober");
    txtCifrado = txtCifrado.replace(/i/gm, "imes");
    txtCifrado = txtCifrado.replace(/a/gm, "ai");
    txtCifrado = txtCifrado.replace(/u/gm, "ufat");

    return txtCifrado;
}

function desencriptar(txtCifrado) {
    let txtFinal = txtCifrado.replace(/enter/gm, "e");
    txtFinal = txtFinal.replace(/ober/gm, "o");
    txtFinal = txtFinal.replace(/imes/gm, "i");
    txtFinal = txtFinal.replace(/ai/gm, "a");
    txtFinal = txtFinal.replace(/ufat/gm, "u");

    return txtFinal;
}

function btnEncriptar() {
    let txtOrigin = textoInput.value;
    if (validarTextoInput(txtOrigin)) {
        txtCifrado = encriptar(txtOrigin);
        showOutput(txtCifrado);
    }
}

function btnDesencriptar() {
    let txt = textoOutput.value;
    txtFinal = desencriptar(txt)
    showOutput(txtFinal)
}

function btnCopiar() {
    let contenido = document.querySelector("#texto-salida");
    contenido.select();
    document.execCommand("copy");

}