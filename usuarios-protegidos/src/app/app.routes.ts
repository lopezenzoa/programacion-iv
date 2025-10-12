import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { UsersPage } from './components/users-page/users-page';
import { UserDetailPage } from './components/user-detail-page/user-detail-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: "login", component: LoginPage },
    { path: "users", component: UsersPage },
    { path: "users/:id", canActivate: [authGuard], component: UserDetailPage },
    { path: "**", canActivate: [authGuard], component: LoginPage }
];
