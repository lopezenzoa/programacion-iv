import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = "http://localhost:3000/users"
  httpClient = inject(HttpClient);

  listUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl);
  }

  getUser(id: string | null): Observable<User> {
    return this.httpClient.get<User>(this.baseUrl + "/" + id);
  }

  create(dto: Partial<User>): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl, dto);
  }
}
