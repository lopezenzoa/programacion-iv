// DOM para traer las etiquetas como objetos JS
const listaTarjetas = document.getElementById("listaTarjetas");


async function obtenerAnimes() {
    try {
        // Lista de animes
        let data;

        await fetch("https://api.jikan.moe/v4/anime")
            .then((res) => res.json())
            .then((animes) => data = animes.data);

        data.forEach(element => {
            // como algunos datos no tenian anio ... 
            const anioPublicacion = element.year ? element.year.toString() : "-";

            // Construir cada tarjeta con la info de la API
            listaTarjetas.innerHTML +=
                `<div class="contenedorTarjeta">
                <img src=${element.images.jpg.image_url} alt=""  class="imagenTarjeta">
                <h2 class="tituloTarjeta">${element.title}</h2>
                <p class="anioPublicacion">${anioPublicacion}</p>
                <a href="tp-integrador-detalle.html?id=${element.mal_id.toString()}" class="verMas">ver mas</a>
            </div>`;
        });
    } catch (error) {
        console.log(error);
    }
}

obtenerAnimes();

async function buscarAnimePorNombre(nombre) {
    let data;

    await fetch("https://api.jikan.moe/v4/anime")
        .then((res) => res.json())
        .then((animes) => data = animes.data);

    const animesFiltrados = data.filter((element) => element.title.toUpperCase() === nombre.toUpperCase());

    animesFiltrados.forEach((anime) => {
        // como algunos datos no tenian anio ... 
        const anioPublicacion = anime.year ? anime.year.toString() : "-";

        // Renderizando los elementos en el HTML
        listaTarjetas.innerHTML = `<div class="contenedorTarjeta">
                <img src=${anime.images.jpg.image_url} alt=""  class="imagenTarjeta">
                <h2 class="tituloTarjeta">${anime.title}</h2>
                <p class="anioPublicacion">${anioPublicacion}</p>
                <a href="tp-integrador-detalle.html?id=${anime.mal_id.toString()}" class="verMas">ver mas</a>
            </div>`;
    });
}


// Busqueda de animes
const buscadorAnime = document.getElementById("buscadorAnime");
const botonBuscar = document.getElementById("botonBuscar");

// Capturar el evento del boton
botonBuscar.addEventListener("click", async (evento) => {
    evento.preventDefault(); // Evita que se recargue la pagina

    buscarAnimePorNombre(buscadorAnime.value);
});