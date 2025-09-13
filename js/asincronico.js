// Promesas
// Ejercicio 1
/*
const prom = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa resuelta"), 3000);
});
*/

// prom.then((respuesta) => console.log(respuesta));

// Ejercicio 2
const promPar = () => new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 100) + 1;

    if (num % 2 == 0)
        resolve("Numero par (" + num + ")");
    else
        reject("Numero impar (" + num + ")");
});

// promPar.then((msj) => console.log(msj)).catch((msj) => { throw new Error(msj) });

// Async / Await
// Ejercicio 3 
async function esPar() {
    try {
        const prom = await promPar();
        console.log(prom);
    } catch(error) {
        throw new Error(error);
    }
}

esPar();

// Ejercicio 4
const promEspera = (ms) => new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promesa resuelta"), ms);
});

async function esperar(ms) {
    try {
        const respuesta = await promEspera(ms);
        console.log(respuesta);
    } catch (error) {
        throw new Error(error); 
    }
}

esperar(3000);

// Manejo de errores
// Ejercicio 5

// Uso de APIs (Fetch)
// Ejercicio 6

function mostrarChiste() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then((respuesta) => respuesta.json())
        .then((chiste) => console.log(chiste.setup, chiste.punchline));
}

mostrarChiste();

function buscarPokemon(nombre) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then((respuesta) => respuesta.json())
        .then((pokemon) => console.log(pokemon.name + "\n" + pokemon.id + "\n" + pokemon.types[0].type.name));
}

buscarPokemon("Pikachu");

// Mini Proyecto Integrador
