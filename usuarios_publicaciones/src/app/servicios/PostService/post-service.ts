import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../../../modelos/Post';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  http = inject(HttpClient);

  getAll(): Observable<Post[]> {
    return this.http.get<Post[]>("http://localhost:3000/posts");
  }

  getByUserId(id: number): Observable<Post[]> {
    return this.getAll().pipe(
      map((posts: Post[]) => posts.filter((post: Post) => post.userId === id)) // transforma usando un filtro
    );
  }
}
