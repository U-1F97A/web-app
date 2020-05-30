import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  items: RadioInputItem[];
  onChange: (key: number) => void;
}

export type RadioInputItem = {
  key: number;
  value: string;
};

const RadioInput: FC<Props> = (props) => {
  const { name, items, onChange } = props;
  return (
    <>
      {items.map((item) => (
        <label key={item.key}>
          <input type="radio" name={name} onChange={() => onChange(item.key)} />
          {item.value}
        </label>
      ))}
    </>
  );
};

export default RadioInput;
