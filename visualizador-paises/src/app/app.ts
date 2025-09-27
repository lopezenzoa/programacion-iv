import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaPaises } from './lista-paises/lista-paises';
import { GrillaFavoritos } from './grilla-favoritos/grilla-favoritos';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListaPaises, GrillaFavoritos],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('visualizador-paises');
  paises: any = signal([]);

  public agregarPaisAFavoritos(evento: any) {
    if (!this.paisAgregado(evento))
      this.paises().push(evento);
    else
      alert("EL PAIS YA FUE AGREGADO");
  }

  public paisAgregado(pais: any) {
    return this.paises().includes(pais);
  }
}
