import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<Props> = (props) => {
  const { value, onChange } = props;
  return (
    <>
      <input type="text" value={value} onChange={(event) => onChange(event)} />
    </>
  );
};

export default TextInput;
