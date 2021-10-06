import { createAction, props } from "@ngrx/store";
import { User } from "./user.model";

export const addUser = createAction(
  '[User] Add User',
  props<{user: User}>()
);
