import { inject, Injectable } from '@angular/core';
import { User } from '../modelos/User';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  http: HttpClient = inject(HttpClient);
  baseUrl: string = "http://localhost:3000/users";

  register(dto: Partial<User>): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl, dto);
  }
}
