import { Component, signal } from '@angular/core';
import { RegistroPage } from './componentes/registro-page/registro-page';

@Component({
  selector: 'app-root',
  imports: [RegistroPage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('registro-usuarios');
}
