import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';
import { UsersPage } from './components/users-page/users-page';
import { UserDetailPage } from './components/user-detail-page/user-detail-page';

export const routes: Routes = [
    { path: "login", component: LoginPage },
    { path: "users", component: UsersPage },
    { path: "users/:id", component: UserDetailPage },
    { path: "**", component: LoginPage }
];
