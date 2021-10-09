import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post/post.model';
import { selectPosts } from 'src/app/state/post/post.selector';
import * as PostActions from "src/app/state/post/post.action";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts$:Observable<Post[]>;

  constructor(private store:Store,private route:Router) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(selectPosts);
    this.store.dispatch(PostActions.loadPost());

  }


  postSelected(post:Post){
    this.route.navigate(['posts',post.id])
  }

}
