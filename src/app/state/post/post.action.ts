import { createAction, props } from '@ngrx/store';
import { Post } from './post.model';

export const ADD_POST = '[Post] Add Post';
export const LOAD_POST = '[Post] Load Post';
export const LOAD_POST_SUCCESS = '[Post] Load Post Success';
export const LOAD_POST_FAILED = '[Post] Load Post Failed';
export const LOAD_SELECTED_POST = '[Post] Load Selected Post';
export const LOAD_SELECTED_POST_SUCCESS = '[Post] Load Selected Post Success';
export const LOAD_SELECTED_POST_FAILED = '[Post] Load Selected Post Failed';

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

export const loadSelectedPost = createAction(
  LOAD_SELECTED_POST,
  // props<{ post: Post }>()
);

export const loadSelectedPostSuccess = createAction(
  LOAD_SELECTED_POST_SUCCESS,
  props<{ post: Post }>()
);

export const loadSelectedPostFailed = createAction(
  LOAD_SELECTED_POST_FAILED,
  props<{ msg: string }>()
);
