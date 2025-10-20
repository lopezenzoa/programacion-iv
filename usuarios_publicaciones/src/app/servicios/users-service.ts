import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../modelos/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  http= inject(HttpClient); // consultas http ( get post put delete)

  getAll(): Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  } // un observable es como una propesa pero mas pro

  getById(id: number): Observable<User[]> {
    return this.getAll().pipe(
      map((users: User[]) => users.filter((u: User) => u.id === id))
    );
  }
}
