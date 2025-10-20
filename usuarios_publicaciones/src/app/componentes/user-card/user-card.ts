import { Component, input, output } from '@angular/core';
import { User } from '../../../modelos/User';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css'
})
export class UserCard {
  user = input<User>();
  selected = output<User | undefined>();

  seleccionarUsuario() {
    this.selected.emit(this.user());
  }
}
