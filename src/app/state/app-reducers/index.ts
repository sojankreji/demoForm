import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { reducer as userReducer } from "../user/user.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  users: userReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
