import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Observable } from 'rxjs';
import { Account } from '../../models/Account';

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
}
