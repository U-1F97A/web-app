import types, { ScheduleState } from './types';

export function updateSchedule(schedule: ScheduleState) {
  return {
    type: types.update,
    payload: {
      schedule,
    },
  };
}
