import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/state/post/post.model';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  @Input() posts: Array<Post>;
  @Output() postSelected = new EventEmitter<Post>();

  constructor() {}

  ngOnInit(): void {}

  onPostClick(post: Post) {
      this.postSelected.emit(post);
  }
}
