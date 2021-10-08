import { createReducer, on } from "@ngrx/store";
import { Post } from "./post.model";
import * as PostActions from "./post.action";

export interface State {
  posts: Post[];
}

export const initialState: State = {
  posts: [],


};


const addPost = (state: State, payload: {post:Post}) => {
  return { ...state,registeredUsers:[...state.posts,payload.post]};
}


export const reducer = createReducer(initialState, on( PostActions.addPost,addPost));
