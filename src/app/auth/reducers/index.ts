import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { User } from '../model/user.model';
import { on } from '@ngrx/store';
import { AuthActions } from '../action-types';

export const authFeatureKey = 'auth';

export interface AuthState {
 user: User
}

export const initialAuthState:AuthState = {
  user: undefined
}


export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) => {
    return {
      user: action.user
    }
  })
);