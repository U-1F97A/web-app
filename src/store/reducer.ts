import { combineReducers } from 'redux';

import { initialState as BookInitState, reducer as bookReducer } from './book';
import {
  initialState as ScheduleInitState,
  reducer as scheduleReducer,
} from './schedule';

export function initialState() {
  return {
    book: BookInitState(),
    schedule: ScheduleInitState(),
  };
}

export const rootReducer = combineReducers({
  book: bookReducer,
  schedule: scheduleReducer,
});
