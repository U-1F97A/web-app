type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never;
};
type CreatorsToActions<T> = Unbox<ReturnTypes<T>>;

// todoのActionCreatorを渡す
export type Actions = CreatorsToActions<
  typeof import('./book/actions') | typeof import('./schedule/actions')
>;
