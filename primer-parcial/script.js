// Constantes del DOM
const listaPaises = document.getElementById("listaPaises");
const grillaBanderas = document.getElementById("grillaBanderas");

const paises = []; // Arreglo inicial para mostrar los paises
const paisesFavoritos = [];

// Cuando carga la ventana, se renderiza una lista inicial de paises
window.addEventListener("load", async () => {
    const respuestaAPI = await fetch("https://restcountries.com/v3.1/subregion/Southern%20Europe?fields=name,flags,coatOfArms")
    .then((res) => res.json())
    .then((data) => data); // De esta forma guardo la respuesta de la API en una constante

    respuestaAPI.forEach(pais => {
        agregarPais(pais);
    });

    // Muestro todos los paises por pantalla
    renderizarListaPaises();
});

/** Agrega el pais al arreglo */
function agregarPais(pais) {
    paises.push(
        {
            nombre: pais.name.common,
            escudo: {
                png: pais.coatOfArms.png
            },
            bandera: {
                png: pais.flags.png,
                alt: pais.flags.alt
            }
        }
    );
}

function renderizarListaPaises() {
    paises.forEach(pais => {
        listaPaises.innerHTML +=
        `
            <div class="tarjeta-pais">
                <img src="${pais.escudo.png}" alt="${pais.escudo.alt}">
                <!-- La siguiente imagen no se muestra porque sirve para almacenar los atributos de la bandera -->
                <!-- De esta forma, evito el consumo repetido de la API -->
                <img class="bandera" src="${pais.bandera.png}" alt="${pais.bandera.alt}">
                <h3>${pais.nombre}</h3>
            </div>
        `;
    });
}

/* Delegacion de eventos (agrego un evento a la lista inicial) */
listaPaises.addEventListener("click", (e) => {
    // Solamente ejecuto la logica si se hace click sobre el 'div'
    if (e.target.tagName === "DIV") {
        const paisFavorito = {
            nombre: e.target.children[2].innerHTML,
            bandera: {
                // Accedo a la direccion que oculte antes para obtener la bandera
                png: e.target.children[1].attributes[1].value,
                alt: e.target.children[1].attributes[2].value
            }
        };

        try {
            agregarPaisFavorito(paisFavorito);
            renderizarGrillaBanderas(); // Muestra las grilla de banderas favoritas en pantalla
        } catch (err) {
            alert(err);
        }
    }
});

/* Agrega el pais al arreglo y manejo el arreglo */
function agregarPaisFavorito(paisFavorito) {
    // Mapeo las direcciones de la imagen de los paises (que considero unicas) para buscar repetidos
    const nombres = paisesFavoritos.map(pais => pais.nombre);

    if (!nombres.includes(paisFavorito.nombre))
        paisesFavoritos.push(paisFavorito);
    else
        throw new Error("El pais ya fue agregado a favoritos!");
}

function renderizarGrillaBanderas() {
    grillaBanderas.innerHTML = ""; // Limpio la grilla para evitar duplicados

    paisesFavoritos.forEach(pais => {
        grillaBanderas.innerHTML += `<img class="bandera-favoritos" src="${pais.bandera.png}" alt="${pais.bandera.alt}"/>`;
    });
}
