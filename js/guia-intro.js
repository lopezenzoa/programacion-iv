// GUIA JS

// Parte 1: Variables y Constantes
/*
// Variables de texto
let nombre = "Ailen";
let nombre1 = "Enzo";

console.log(nombre, nombre1)

// Operación matemática básica
let num1 = 5;
let num2 = 4;

let suma= (a,b) => {
    return a + b;
}

console.log("La suma de las variables es:", suma(num1, num2))

// Constante matemática
const PI = 3.14159;
console.log("La variable PI es igual a = ", PI)
*/

// Parte 2: funciones
/*
// Función con paramétro
function saludar(nombre) {
    return "Hola " + nombre + "!";
}

console.log(saludar("Enzo"));

// Función booleana
const esPar = n => (n % 2 === 0);
console.log(esPar(6));

// Función con array
const sumArray = (...numeros) => {
    let res = 0;

    // Se usa of para recorrer arreglos
    for (let num of numeros) {
        res += num;
    }

    return res;
}

console.log(sumArray(1, 2, 3, 4, 5, 6));
*/

// Parte 3: Callbacks
/*
// Callback básico
const callBack = () => "Colgar";
const mostrarMensaje = (mensaje, callBack) => {
    console.log(mensaje, callBack())
}
mostrarMensaje("Atendido", callBack);

// Callback con retorno de datos
const sumarAsync = (a, b, callBack) => {
    let res = a + b;
    callBack(res);
}

const mostrarRes = res => console.log(res); // Esta funcion voy a usar como callback
sumarAsync(2, 4, mostrarRes);

// Uso de setTimeout
const retrasarEjecucion = (callBack, time, ...args) => {
    return setTimeout(() => callBack(...args), time);
}

const mostrarMsj = msj => console.log(msj);

retrasarEjecucion(mostrarMsj, 2000, "Mensaje");

// Callback anidado (simulación HTTP)
const obtenerDatosUsuario = (idUsuario, callBack) => {
    return setTimeout(() => callBack([idUsuario, "Enzo", "Lopez", 22]), 3000);
}

obtenerDatosUsuario(3, datos => console.log(datos));
*/

// Ejercicio Integrador – Sistema de Registro y Validación de Usuarios
// 1. Registro de usuario
function registrarUsuario(nombre, edad, email, callBack) {
    const nombreValido = nombre.trim().length > 0;
    const edadValida = edad >= 18;
    const emailValido = email.includes("@") && email.includes(".com");

    if (nombreValido && edadValida && emailValido) {
        callBack("USUARIO VALIDADO CON EXITO");
    } else {
        callBack("EL USUARIO NO CUMPLE CON LAS CONDICIONES DE REGISTRO");
    }
}

// 2. Normalización del nombre
const mostrarMsj = msj => console.log(msj);
registrarUsuario("Enzo", 18, "enzo@gmail.com", mostrarMsj);

const nombreNormalizado = function formatearNombre(nombre) {
    return nombre[0].toUpperCase() + nombre.substring(1).toLowerCase();
}

const nombreNoNormalizado = "jUaN";
console.log(nombreNormalizado(nombreNoNormalizado));

// 3. Generación de ID único
const id = function generarID(nombre, edad) {
    const nombreCod = (nombre[0] + nombre[1] + nombre[2]).toUpperCase();
    const edadCod = edad; // Estoy suponiendo que la edad siempre va a ser de dos digitos

    const numAleatorio = Math.random() * (1000 - 100) + 100;

    return nombreCod + edadCod + '-' + parseInt(numAleatorio);
}

console.log(id("Enzo", 22));

// 4. Validación de contraseña
const passValida = function validarPassword(password) {
    const longitudValida = password.length >= 8;
    const contieneNumero = /[0-9]/.test(password); // /[0-9]/ es una expresion regular que acepta cualquier digito
    const contieneMayus = () => {
        const formattedPass = password.replace(/[0-9]/g, ''); // Le saco todos los numeros

        for (let i = 0; i < formattedPass.length; i++) {
            if (formattedPass[i] == formattedPass[i].toUpperCase()) { // Lo comparo con la misma letra en mayuscula
                return true; // Tiene una letra mayuscula
            }
        }

        return false; // No encontro ninguna letra mayuscula
    }



    return longitudValida && contieneNumero && contieneMayus();
}

console.log(passValida("enZolopez12"));

// 5. Funciones con callbacks
const usuarioGuardado = function guardarUsuario(usuario, callBack) {
    setTimeout(() => callBack("USUARIO GUARDADO CON EXITO: " + usuario), 2000); // El Callback en un setTimeout tiene que ser ejecutado adrento de una funcion flecha
}

usuarioGuardado("Enzo", mostrarMsj);

// 6. Estadísticas de usuarios registrados
const promedioEdades = function promedioEdades(...edades) {
    let sum = 0;

    for (let i = 0; i < edades.length; i++) {
        sum += edades[i];
    }

    return sum / edades.length;
}

console.log(promedioEdades(10, 10, 10, 10, 15));

// 7. Función extra
const cantVocales = function contarVocales(texto) {
    let vocales = 0;

    for (let i = 0; i < texto.length; i++) {
        if (
            texto[i].toUpperCase() === 'A' ||
            texto[i].toUpperCase() === 'E' ||
            texto[i].toUpperCase() === 'I' ||
            texto[i].toUpperCase() === 'O' ||
            texto[i].toUpperCase() === 'U'
        ) vocales += 1;
    }

    return vocales;
}

console.log(cantVocales("Holaaaa"));