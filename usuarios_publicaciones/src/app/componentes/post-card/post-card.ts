import { Component, input, InputSignal } from '@angular/core';
import { Post } from '../../../modelos/Post';
import { User } from '../../../modelos/User';

@Component({
  selector: 'app-post-card',
  imports: [],
  templateUrl: './post-card.html',
  styleUrl: './post-card.css'
})
export class PostCard {
  post: InputSignal<Post | undefined> = input<Post | undefined>();
}
