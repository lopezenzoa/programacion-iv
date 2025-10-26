import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../../modelos/Pelicula';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  http: HttpClient = inject(HttpClient);
  baseUrl: string = 'http://localhost:3000/movies';

  guardarPelicula(dto: Pelicula): Observable<Pelicula> {
    dto.id = Date.now();

    return this.http.post<Pelicula>(this.baseUrl, dto);
  }

  obtenerPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.baseUrl);
  }

  obtenerPeliculaPorId(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(this.baseUrl + "/" + id);
  }
}
