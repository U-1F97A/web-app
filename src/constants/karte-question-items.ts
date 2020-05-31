import { RadioInputItem } from '~/components/radio-input';

export const knowledgeBaseItem: RadioInputItem[] = [
  { key: 0, value: 'ない' },
  { key: 1, value: '多少ある' },
  { key: 2, value: 'ある' },
];

export const levelItem: RadioInputItem[] = [
  { key: 0, value: '入門レベル' },
  {
    key: 1,
    value: '中級レベル',
  },
  { key: 2, value: '応用レベル' },
];

export const habitItem: RadioInputItem[] = [
  { key: 0, value: '読まない' },
  { key: 1, value: 'たまに読む' },
  { key: 2, value: '読む' },
];

export const goodAtItem: RadioInputItem[] = [
  { key: 0, value: '苦手' },
  { key: 1, value: '苦手ではない' },
  { key: 2, value: '得意' },
];
