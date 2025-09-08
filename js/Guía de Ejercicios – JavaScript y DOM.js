// 1. Colecciones (Arrays)
// 1.
/*
const compas = ["Ailen", "Enzo", "Agustina", "Juan", "Vikingo"];
console.log(compas[0], compas[compas.length - 1]);

// 2.
const numeros = [5, 8, 12, 20, 3];
const dobles = numeros.map((n) => n * 2);
const mayores = numeros.filter((n) => n > 10);
const sum = numeros.reduce((a, n) => a + n, 0);

console.log(numeros);
console.log(dobles);
console.log(mayores);
console.log(sum);

// 3.
const carrito = [
    {
        nombre: "Talitas",
        precio: 1000,
        cantidad: 1
    },
    {
        nombre: "Don Satur",
        precio: 1500,
        cantidad: 3
    },
    {
        nombre: "Pepitos",
        precio: 2000,
        cantidad: 6
    }
];

const total = carrito.reduce((a, n) => a + (n.precio * n.cantidad), 0);
console.log(total);

const precioDescuento = total - (total * 0.1);
console.log(precioDescuento);
*/

// 2. Objetos
// 4.
const persona = {
    nombre: "Ailen",
    edad: 28,
    profesion: "Programadora"
};

console.log(persona);

// 5.
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

const personaObj = JSON.parse(personaJSON);
console.log(personaObj);

// 6.
class CuentaBancaria {
    #titular;
    #saldo;

    constructor(titular, saldo) {
        this.#titular = titular;
        this.#saldo = saldo;
    }

    depositar(monto) {
        return this.#saldo += monto;
    }

    extraer(monto) {
        return this.#saldo -= monto;
    }

    getSaldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria("Ailen", 12000000);
console.log(cuenta.depositar(500000));
console.log(cuenta.extraer(500000));
console.log(cuenta.getSaldo());

// 3. Manejo del DOM
// 7.
const parrafo = document.getElementById("parrafo");
parrafo.textContent = "Vikingo"; // textContent cambia el texto de una etiqueta

// 8.
const boton = document.getElementById("button");
const lista = document.getElementById("lista");

boton.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = "Ailen";

    lista.appendChild(item);
});

// 9.
const tarjeta = document.getElementById("tarjeta");
const obj = {
    nombre: "Ana",
    edad: 25,
    foto: "https://i.pinimg.com/474x/a3/81/1c/a3811cb79cab3c8210140ea3f0281fc8.jpg"
};

const elementoNombre = document.createElement("h2");
elementoNombre.textContent = obj.nombre;

const elementoEdad = document.createElement("h3");
elementoEdad.textContent = obj.edad;

const elementoFoto = document.createElement("img");
elementoFoto.src = obj.foto;

tarjeta.appendChild(elementoNombre);
tarjeta.appendChild(elementoEdad);
tarjeta.appendChild(elementoFoto);

// 4. Manejadores de Eventos
// 10.
/*
document.addEventListener("keydown", (ev) => {
    console.log(ev.key);
});
*/

// 11.
const input = document.getElementById("input");
const resultadoInput = document.getElementById("resultadoInput"); // div

input.addEventListener("input", (ev) => {
    resultadoInput.textContent = ev.target.value;
});
