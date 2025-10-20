import { Component, effect, inject, input, InputSignal, signal, WritableSignal } from '@angular/core';
import { Post } from '../../../modelos/Post';
import { UsersService } from '../../servicios/users-service';
import { User } from '../../../modelos/User';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  post: InputSignal<Post | undefined> = input<Post | undefined>();
  servicio = inject(UsersService);
  user: WritableSignal<User | undefined> = signal<User | undefined>(undefined);

  constructor() {
    effect(() => {
      if (this.post()) {
        this.servicio.getById(this.post()!.userId).subscribe((u: User[]) => {
          this.user.set(u[0]); // solamente me devuelve el primer valor
        }); // estoy seguro que post() va a tener un valor
      }
    });
  }
}
