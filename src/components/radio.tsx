import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  items: RadioItem[];
  onChange: (key: number) => void;
}

export type RadioItem = {
  key: number;
  value: string;
};

const Radio: FC<Props> = (props) => {
  const { name, items, onChange } = props;
  return (
    <>
      {items.map((item) => (
        <label key={item.key}>
          <input type="radio" name={name} onChange={() => onChange(item.key)} />
          {item.value}
          <br />
        </label>
      ))}
    </>
  );
};

export default Radio;
