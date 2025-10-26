import { Routes } from '@angular/router';
import { LoginComponent } from './componentes/login-component/login-component';
import { CargarPeliculaComponent } from './componentes/cargar-pelicula-component/cargar-pelicula-component';
import { ListaPeliculasComponent } from './componentes/lista-peliculas-component/lista-peliculas-component';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula-component/detalle-pelicula-component';
import { authGuard } from './guards/auth-guard/auth-guard';

export const routes: Routes = [
    { path: "", component: LoginComponent },
    { path: "login", component: LoginComponent },
    { path: "cargar", canActivate: [authGuard], component: CargarPeliculaComponent },
    { path: "peliculas", canActivate: [authGuard], component: ListaPeliculasComponent },
    { path: "peliculas/:id", component: DetallePeliculaComponent }
];
