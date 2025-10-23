import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { User } from '../../../modelos/User';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../servicios/UsersService/users-service';

@Component({
  selector: 'app-users-detail-page',
  imports: [],
  templateUrl: './users-detail-page.html',
  styleUrl: './users-detail-page.css'
})
export class UsersDetailPage {
  user: WritableSignal<User | undefined> = signal<User | undefined>(undefined);
  router = inject(ActivatedRoute);
  servicio: UsersService = inject(UsersService);
  userId: string | null = this.router.snapshot.paramMap.get("id");

  constructor() {
    effect(() => {
      if (this.userId)
        this.servicio.getById(parseInt(this.userId)).subscribe({
          next: (u: User[]) => {
            this.user.set(u[0]);
          },
          error: (err) => {
            throw new Error(err);
          }
        });
    });
  }

  isAdmin(): boolean {
    return this.user()?.role.includes("admin") ? true : false;
  }
}
