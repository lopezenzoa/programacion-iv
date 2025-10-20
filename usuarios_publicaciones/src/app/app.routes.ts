import { Routes } from '@angular/router';
import { UsersPage } from './componentes/users-page/users-page';
import { HomePage } from './componentes/home-page/home-page';
import { PostsPage } from './componentes/posts-page/posts-page';

export const routes: Routes = [
    {
        path: "users", component: UsersPage
    },
    {
        path: "home", component: HomePage
    },
    {
        path: "posts", component: PostsPage
    },
    {
        path: "posts/:id", component: PostsPage
    },
    {
        path: "**", component: HomePage
    }
];
