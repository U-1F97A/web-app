import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: FC<Props> = (props) => {
  const { value, onChange } = props;
  return (
    <>
      <input
        type="number"
        value={value}
        onChange={(event) => onChange(event)}
      />
    </>
  );
};

export default NumberInput;
