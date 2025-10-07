import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { User } from '../../models/User';
import { UsersService } from '../../services/UsersService/users-service';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css'
})
export class UsersPage implements OnInit {
  usersService = inject(UsersService);
  usersList: WritableSignal<User[]> = signal<User[]>([]);

  ngOnInit(): void {
      this.usersService.listUsers().subscribe((users) => this.usersList.set(users));
  }
}
