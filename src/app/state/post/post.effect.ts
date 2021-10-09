import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { debounceTime, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { PostService } from 'src/app/posts/post.service';
import * as PostActions from './post.action';
import * as PostSelector from './post.selector';
import { Post } from './post.model';
import { getRouterState } from '../app-reducers/router-reducer';

@Injectable()
export class PostEffects {
  loadPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadPost),
      debounceTime(300),
      switchMap((data) => {
        return this.postService.searchPosts('').pipe(
          map((x:Post[])=>{
            return  PostActions.loadPostSuccess({post:x})
          })
        )
      })
    )
  );
  loadSelectdPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.loadSelectedPost),
      withLatestFrom(this.store.select(getRouterState)),
      switchMap(([data,routeState]) => {
        return this.postService.getPost(routeState.state.params['postId']).pipe(
          map((x:Post)=>{
            return  PostActions.loadSelectedPostSuccess({post:x})
          })
        )
      })
    )
  );

  constructor(private actions$: Actions, private postService: PostService,private store:Store) {}
}
