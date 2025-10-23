import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { PostService } from '../../servicios/PostService/post-service';
import { Post } from '../../../modelos/Post';
import { ActivatedRoute } from '@angular/router';
import { PostCard } from '../post-card/post-card';
import { UsersService } from '../../servicios/UsersService/users-service';
import { User } from '../../../modelos/User';

@Component({
  selector: 'app-posts-page',
  imports: [PostCard],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css'
})
export class PostsPage {
  servicio = inject(PostService);
  usersServicio = inject(UsersService);
  route = inject(ActivatedRoute);
  userId: string | null = this.route.snapshot.paramMap.get("id");
  posts: WritableSignal<Post[]> = signal<Post[]>([]);

  constructor() {
    // es mejor practica que haya un effect adentro de un constructor
    effect(() => {
      if (this.userId) {
        // Filtro los publicaciones de un usuario especifico
        this.servicio.getByUserId(parseInt(this.userId)).subscribe((posts: Post[]) => {
          this.posts.set(posts);
        });
      } else {
        // Muestro la lista de publicaciones general
        this.servicio.getAll().subscribe({
          next: (res: Post[]) => {
            this.posts.set(res);
          },
          error: (err) => {
            throw new Error(err);
          }
        })
      }
    });
  }
}
