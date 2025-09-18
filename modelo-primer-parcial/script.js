// Traer las constantes del DOM
const barraBusqueda = document.getElementById("barraBusqueda");
const botonBuscar = document.getElementById("botonBuscar");
const grillaPeliculas = document.getElementById("grillaPeliculas");

let peliculas = [];

// Agregar un manejar de eventos
botonBuscar.addEventListener("click", () => {
    const titulo = barraBusqueda.value.trim();

    try {
        buscarPeliculaPorNombre(titulo).then(() => renderizarPeliculas());
    } catch (err) {
        alert(err);
    }
});

// Mostrar peliculas en grilla inicial
/*
window.addEventListener("load", () => {
    renderizarPeliculas();
});
*/

// Renderizar peliculas
function renderizarPeliculas() {
    grillaPeliculas.innerHTML = ""; // Limpia la lista de peliculas

    // recorre el arreglo de peliculas
    peliculas.forEach((pelicula) => {
        // agrega la tarjeta de la palicula a la grilla
        grillaPeliculas.innerHTML += `
            <div class="tarjetaPelicula" id="pelicula">
                <h3>${pelicula.name}</h3>
                <img src="${pelicula.image.original}" alt="" />
                <button id="botonEliminar" value=${pelicula.id}>Eliminar</button>
            </div>`;
    });
}

// Delegacion de eventos (un solo listener para todos los botones)
grillaPeliculas.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        const idPelicula = event.target.value; // El id de la pelicula se manda en el value del boton

        peliculas = peliculas.filter((pelicula) => pelicula.id != idPelicula);
        renderizarPeliculas();
    }
})

// Filtrar peliculas por nombre
async function buscarPeliculaPorNombre(titulo) {
    const pelicula = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${titulo}`)
        .then((res) => res.json())
        .then((data) => data);

    // La pelicula no se encontro
    if (!pelicula)
        throw new Error("No se encontro la pelicula");

    const ids = peliculas.map((pelicula) => pelicula.id); // Mapeo la lista de peliculas por sus ids (que considero unicos)

    // La condicion evita que se duplique el arreglo
    if (!ids.includes(pelicula.id))
        peliculas.push(pelicula); // Agrego la pelicula al listado global de peliculas
}