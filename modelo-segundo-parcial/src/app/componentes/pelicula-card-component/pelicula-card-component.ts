import { Component, input, InputSignal } from '@angular/core';
import { Pelicula } from '../../modelos/Pelicula';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pelicula-card-component',
  imports: [RouterLink],
  templateUrl: './pelicula-card-component.html',
  styleUrl: './pelicula-card-component.css',
})
export class PeliculaCardComponent {
  pelicula: InputSignal<Pelicula | undefined> = input();
}
