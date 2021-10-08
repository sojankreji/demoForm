import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PostService } from 'src/app/post/post.service';
import * as PostActions from "./post.action";

@Injectable()
export class PostEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostActions.LOAD_POST) )
  );

  constructor(
    private actions$: Actions,
    private moviesService: PostService
  ) {}
}
