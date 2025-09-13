// DOM para traer las etiquetas como objetos JS
const listaTarjetas = document.getElementById("listaTarjetas");


async function obtenerAnimes() {
    try{
        // Lista de animes
        let data;

        const animes = await fetch("https://api.jikan.moe/v4/anime")
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
                <a href="tp-integrador-detalle.html" class="verMas">ver mas</a>
            </div>`;
        });

        document.appendChild(listaTarjetas);
    } catch(error) {
        console.log(error);
    }
}

obtenerAnimes();


// PAGINA DE DETALLE (ver mas)
const detalleAnime = document.getElementById("detalleAnime");

async function obtenerAnimePorId(id) {
    try {
        const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const animeJSON = await anime.json();

        const data = animeJSON.data;

        const anioPublicacion = data.year ? data.year.toString() : "-";

        console.log(data);

        detalleAnime.innerHTML = `<h1 class="tituloTarjeta">${data.title}</h1>
            <img src=${data.images.jpg.image_url} alt=""  class="imagenTarjeta">

            <h3>Episodios</h3>
            <p class="episodios">${data.episodes}</p>

            <h3>Año de Publicacion</h3>
            <p class="anioPublicacion">${anioPublicacion}</p>

            <h3>Estado</h3>
            <p class="estado">${data.status}</p>

            <h3>Sinopsis</h3>
            <p class="sinopsis">${data.synopsis}</p>`;

        document.appendChild(detalleAnime);

    } catch (error) {
        console.log("El anime con id " + id + " no se encontro");
    }
    
}


obtenerAnimePorId(1);