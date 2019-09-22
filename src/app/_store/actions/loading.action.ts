import { Action } from '@ngrx/store';

export const START = '[Loading] Start';
export const STOP = '[Loading] Stop';

export class StartLoadingAction implements Action {
  readonly type = START;

  constructor() { }
}

export class StopLoadingAction implements Action {
  readonly type = STOP;

  constructor() { }
}


export type Actions = StartLoadingAction | StopLoadingAction;