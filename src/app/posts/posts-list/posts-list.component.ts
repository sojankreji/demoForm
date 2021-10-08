import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/state/post/post.model';

@Component({
  selector: 'posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  @Input() posts: Array<Post>;

  constructor() { }

  ngOnInit(): void {
  }

}
