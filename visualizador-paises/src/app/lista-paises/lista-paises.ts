import { Component, output } from '@angular/core';
import { TarjetaPais } from '../tarjeta-pais/tarjeta-pais';

@Component({
  selector: 'app-lista-paises',
  imports: [TarjetaPais],
  templateUrl: './lista-paises.html',
  styleUrl: './lista-paises.css'
})
export class ListaPaises {
  paises: any = [];
  paisFavorito = output();

  constructor() {
    this.fetchPaises();
  }

  public async fetchPaises() {
    const respuestaAPI = await fetch("https://restcountries.com/v3.1/subregion/Southern%20Europe?fields=name,flags,coatOfArms")
      .then((res) => res.json())
      .then((data) => data); // De esta forma guardo la respuesta de la API en una constante

    respuestaAPI.forEach((pais: any) => {
      this.agregarPais(pais);
    });

    // Muestro todos los paises por pantalla
    // renderizarListaPaises();
  }

  /** Agrega el pais al arreglo */
  public agregarPais(pais: any) {
    this.paises.push(
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

  public marcarPaisFavorito(pais: any) {
    this.paisFavorito.emit(pais);
  }
}

