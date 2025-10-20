import { Component, effect, inject, signal, WritableSignal } from '@angular/core';
import { PostService } from '../../servicios/post-service';
import { Post } from '../../../modelos/Post';
import { ActivatedRoute } from '@angular/router';
import { PostCard } from '../post-card/post-card';

@Component({
  selector: 'app-posts-page',
  imports: [PostCard],
  templateUrl: './posts-page.html',
  styleUrl: './posts-page.css'
})
export class PostsPage {
  servicio = inject(PostService);
  route = inject(ActivatedRoute);
  userId: string | null = this.route.snapshot.paramMap.get("id");
  posts: WritableSignal<Post[]> = signal<Post[]>([]);

  constructor() {
    // es mejor practica que haya un effect adentro de un constructor
    effect(() => {
      if (this.userId) {
        this.servicio.getByUserId(parseInt(this.userId)).subscribe((posts: Post[]) => {
          this.posts.set(posts);
        });
      }
    });
  }
}
