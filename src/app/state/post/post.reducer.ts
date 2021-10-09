import { createReducer, on } from '@ngrx/store';
import { Post } from './post.model';
import * as PostActions from './post.action';

export interface State {
  posts: Post[];
  slectedPost: { post: Post; isLoaded: boolean };
}

export const initialState: State = {
  posts: [],
  slectedPost: { post: null, isLoaded: false },
};

const addPost = (state: State, payload: { post: Post }): State => {
  return { ...state, posts: [...state.posts, payload.post] };
};
const loadPost = (state: State, payload: { post: Post[] }): State => {
  return { ...state, posts: payload.post };
};
const loadSelectedPostSuccess = (state: State, payload: { post: Post }): State => {
  return { ...state, slectedPost: { post: payload.post, isLoaded: true } };
};
const loadSelectedPost = (state: State): State => {
  return { ...state, slectedPost: { post: null, isLoaded: false } };
};

export const reducer = createReducer(
  initialState,
  on(PostActions.addPost, addPost),
  on(PostActions.loadPostSuccess, loadPost),
  on(PostActions.loadSelectedPost, loadSelectedPost),
  on(PostActions.loadSelectedPostSuccess, loadSelectedPostSuccess)
);
