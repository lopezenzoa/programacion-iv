import { Routes } from '@angular/router';
import { UsersPage } from './componentes/users-page/users-page';
import { HomePage } from './componentes/home-page/home-page';
import { PostsPage } from './componentes/posts-page/posts-page';
import { UsersDetailPage } from './componentes/users-detail-page/users-detail-page';
import { authGuard } from './guards/AuthGuard/auth-guard';

export const routes: Routes = [
    {
        path: "users", component: UsersPage
    },
    {
        path: "home", component: HomePage
    },
    {
        canActivate: [authGuard], path: "posts", component: PostsPage
    },
    {
        canActivate: [authGuard], path: "posts/:id", component: PostsPage
    },
    {
        path: "users/:id", component: UsersDetailPage
    },
    {
        path: "**", component: UsersPage
    }
];
