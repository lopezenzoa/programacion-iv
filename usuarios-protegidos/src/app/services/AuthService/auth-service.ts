import { Injectable, WritableSignal, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Account } from '../../models/Account';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  session: WritableSignal<boolean> = signal<boolean>(false);
  httpClient = inject(HttpClient);
  baseUrl: string = "http://localhost:3000/accounts";

  getAccounts(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl);
  }

  isLoggedIn(): boolean {
    return this.session();
  }

  login(username: string, password: string): Observable<boolean> {
    // pipe(): Permite realizar operaciones intermedias para tratar el Observale (como stream en Java) antes de subscribirse
    return this.getAccounts().pipe(
      // En este caso, la operacion que estoy haciendo es un mapeo de los datos que me llegan
      map((accounts) => {
        for (let account of accounts) {
          if (account.username === username && account.password === password) {
            this.session.set(true);
          }
        }

        return this.session();
      })
    );
  }

  logout(): void {
    this.session.set(false);
  }
}
