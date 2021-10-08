import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromPost from '../post/post.reducer';

export const selectPostState = createFeatureSelector<fromPost.State>(
  "post"
);


export const selectPosts = createSelector(
  selectPostState,
  (state: fromPost.State) => state.posts
);

// export const selectRegisterdUser = (name:string) => createSelector(
//   selectRegisterdUsers,
//   (state: User[]) => state.filter(x=>x.name==name)
// );
