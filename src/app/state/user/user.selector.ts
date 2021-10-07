import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromUser from '../user/user.reducer';
import { User } from "./user.model";

export const selectUserState = createFeatureSelector<fromUser.State>(
  "users"
);


export const selectRegisterdUsers = createSelector(
  selectUserState,
  (state: fromUser.State) => state.registeredUsers
);

export const selectRegisterdUser = (name:string) => createSelector(
  selectRegisterdUsers,
  (state: User[]) => state.filter(x=>x.name==name)
);
