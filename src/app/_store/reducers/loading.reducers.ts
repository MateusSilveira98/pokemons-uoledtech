import { ActionReducer, Action } from '@ngrx/store';
import * as loading from '../actions/loading.action';

export function LoadingReducer(state: boolean = false, action: Action) {
  switch (action.type) {
    case loading.START:
      return true;
    case loading.STOP:
      return false;
    default:
      return state;
  }
}