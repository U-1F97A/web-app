export default { update: 'UPDATE_SCHEDULE' } as const;

export type ScheduleState = {
  s3URL?: string;
  comment?: string;
};
