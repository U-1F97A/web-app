import { Actions } from '../actions';

import types, { ScheduleState } from './types';

export function initialState(injects?: ScheduleState): ScheduleState {
  return {
    s3URL: '',
    comment: '',
    ...injects,
  };
}

export function reducer(
  state = initialState(),
  action: Actions
): ScheduleState {
  switch (action.type) {
    case types.update:
      return { ...state, ...action.payload.schedule };
    default:
      return state;
  }
}
