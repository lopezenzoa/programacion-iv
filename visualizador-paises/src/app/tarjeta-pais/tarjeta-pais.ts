import { Component, input } from '@angular/core';

@Component({
  selector: 'app-tarjeta-pais',
  imports: [],
  templateUrl: './tarjeta-pais.html',
  styleUrl: './tarjeta-pais.css'
})
export class TarjetaPais {
  pais: any = input();

  public agregarPaisFavorito(pais: any) {
  }
}
