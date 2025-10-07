import { Component, inject, signal, WritableSignal } from '@angular/core';
import { UsersService } from '../../services/UsersService/users-service';
import { User } from '../../models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail-page',
  imports: [],
  templateUrl: './user-detail-page.html',
  styleUrl: './user-detail-page.css'
})
export class UserDetailPage {
  usersService = inject(UsersService);
  route: ActivatedRoute = inject(ActivatedRoute);
  user: WritableSignal<User | undefined> = signal<User>({ id: 0, name: "", email: "" });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.usersService.getUser(id).subscribe((user) => {
      this.user.set(user);
    });
  }
}
