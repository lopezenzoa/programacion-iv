import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { PeliculaCardComponent } from '../pelicula-card-component/pelicula-card-component';
import { Pelicula } from '../../modelos/Pelicula';
import { MovieService } from '../../servicios/movie-service/movie-service';

@Component({
  selector: 'app-lista-peliculas-component',
  imports: [PeliculaCardComponent],
  templateUrl: './lista-peliculas-component.html',
  styleUrl: './lista-peliculas-component.css',
})
export class ListaPeliculasComponent {
  peliculas: WritableSignal<Pelicula[]> = signal([]);
  servicio: MovieService = inject(MovieService);

  constructor() {
    effect(() => {
      this.servicio.obtenerPeliculas().subscribe((res: Pelicula[]) => this.peliculas.set(res));
    });
  }
}
