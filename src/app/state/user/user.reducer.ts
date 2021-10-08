import { createReducer, on } from '@ngrx/store';
import { User } from './user.model';
import * as UserActions from './user.action';

export interface State {
  registeredUsers: User[];
}

export const initialState: State = {
  registeredUsers: [],


};


const addUser = (state: State, payload: {user:User}) => {
  return { ...state,registeredUsers:[...state.registeredUsers,payload.user]};
}


export const reducer = createReducer(initialState, on( UserActions.addUser,addUser));
