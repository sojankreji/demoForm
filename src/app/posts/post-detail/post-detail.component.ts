import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/state/post';
import * as fromPost from '../../state/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post$:Observable<Post>

  constructor(private store:Store) { }

  ngOnInit(): void {
    this.post$ = this.store.select(fromPost.selectSelectedPost);
  }

}
