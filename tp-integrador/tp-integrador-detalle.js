// PAGINA DE DETALLE (ver mas)
const params = new URLSearchParams(window.location.search);
const animeId = params.get("id");

const detalleAnime = document.getElementById("detalleAnime");

async function obtenerAnimePorId(id) {
    try {
        const anime = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const animeJSON = await anime.json();
        const data = animeJSON.data;

        const anioPublicacion = data.year ? data.year.toString() : "-";

        detalleAnime.innerHTML = `
            <section class="tituloDetalle">
                <h1 class="tituloTarjeta">${data.title}</h1>
                <img src=${data.images.jpg.image_url} alt=""  class="imagenTarjeta">
            </section>

            <section class="contenidoDetalle">
                <section>
                    <h2>Episodios</h2>
                    <p class="episodios">${data.episodes}</p>
                </section>

                <section>
                    <h2>Año de Publicacion</h2>
                    <p class="anioPublicacion">${anioPublicacion}</p>
                </section>

                <section>
                    <h2>Estado</h2>
                    <p class="estado">${data.status}</p>
                </section>

                <section>
                    <h2>Sinopsis</h2>
                    <p class="sinopsis">${data.synopsis}</p>
                </section>
            </section>
            `;
    } catch (error) {
        console.log("El anime con id " + id + " no se encontro");
    }
}


obtenerAnimePorId(animeId);