import { createAction, props } from '@ngrx/store';
import { type } from 'os';
import { Post } from './post.model';
import { ofType } from '@ngrx/effects';

export const ADD_POST = '[Post] Add Post';
export const LOAD_POST = '[Post] Load Post';
export const LOAD_POST_SUCCESS = '[Post] Load Post Success';
export const LOAD_POST_FAILED = '[Post] Load Post Failed';

export const addPost = createAction(ADD_POST, props<{ post: Post }>());

export const loadPost = createAction(LOAD_POST);

export const loadPostSuccess = createAction(
  LOAD_POST_SUCCESS,
  props<{ post: Post[] }>()
);

export const loadPostFailed = createAction(
  LOAD_POST_FAILED,
  props<{ msg: string }>()
);

// export  type ACTIONS  =  ofType addPost //| typeof  loadPost |typeof  loadPostSuccess | typeof loadPostFailed;
