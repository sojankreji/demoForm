import {
  ActionReducerMap,
  createFeatureSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from '../user/user.reducer';
import * as fromPost from '../post/post.reducer';
import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';
import { RouterStateUrl } from './router-reducer';


export interface State {
  routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
  users: fromUser.State;
  post: fromPost.State;
}

export const reducers: ActionReducerMap<State> = {
  users: fromUser.reducer,
  routerReducer: fromRouter.routerReducer,
  post:fromPost.reducer
};



export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
