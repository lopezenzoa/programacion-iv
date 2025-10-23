import { Component, inject, signal } from '@angular/core';
import { UsersService } from '../../servicios/UsersService/users-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from '../../../modelos/User';
import { UserCard } from '../user-card/user-card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  imports: [UserCard],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css'
})
export class UsersPage {
  servicio = inject(UsersService); // lo inyectamos para utilizar el servicio 
  listaUsuario = toSignal<User[]>(this.servicio.getAll());
  router = inject(Router);

  mostrarUsuario(user: User | undefined) {
    this.router.navigate(["posts", user?.id]);
  }
}
