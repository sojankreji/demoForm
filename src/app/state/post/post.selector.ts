import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Post } from '.';
import { getRouterState, RouterStateUrl } from '../app-reducers/router-reducer';
import * as fromPost from '../post/post.reducer';

export const selectPostState = createFeatureSelector<fromPost.State>('post');

export const selectPosts = createSelector(
  selectPostState,
  (state: fromPost.State) => state.posts
);

export const selectSelectedPost = createSelector(
  selectPostState,
  (state: fromPost.State) => state.slectedPost.post
);
export const selectSelectedPostState = createSelector(
  selectPostState,
  (state: fromPost.State) => state.slectedPost.isLoaded
);
export const isSelectedPostLoaded = createSelector(
  selectSelectedPost,
  getRouterState,
  (state: Post,routerState:RouterReducerState<RouterStateUrl>) => {
    var x =  state?state?.id==routerState.state.params['postId']:false;
    return x;
  }
);



// export const selectRegisterdUser = (name:string) => createSelector(
//   selectRegisterdUsers,
//   (state: User[]) => state.filter(x=>x.name==name)
// );
