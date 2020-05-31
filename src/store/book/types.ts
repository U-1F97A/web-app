export default { update: 'UPDATE_BOOK' } as const;

export type BookState = {
  title: string;
  isbn?: string;
  image?: string;
  pages: number;
};
