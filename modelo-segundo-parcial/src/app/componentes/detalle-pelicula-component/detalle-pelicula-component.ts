import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../servicios/movie-service/movie-service';
import { Pelicula } from '../../modelos/Pelicula';

@Component({
  selector: 'app-detalle-pelicula-component',
  imports: [],
  templateUrl: './detalle-pelicula-component.html',
  styleUrl: './detalle-pelicula-component.css',
})
export class DetallePeliculaComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  id: Signal<number | null> = computed(() => parseInt(this.route.snapshot.paramMap.get("id")!));
  servicio: MovieService = inject(MovieService);
  pelicula: WritableSignal<Pelicula | undefined> = signal(undefined);

  constructor() {
    this.servicio.obtenerPeliculaPorId(this.id()!).subscribe((res: Pelicula) => this.pelicula.set(res));
  }
}
