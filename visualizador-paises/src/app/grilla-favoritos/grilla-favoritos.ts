import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-grilla-favoritos',
  imports: [],
  templateUrl: './grilla-favoritos.html',
  styleUrl: './grilla-favoritos.css'
})
export class GrillaFavoritos {
  paisesFavoritos: any = input([]);
}
