import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: FC<Props> = (props) => {
  const { onChange } = props;
  return (
    <>
      <input type="checkbox" onChange={(event) => onChange(event)} />
    </>
  );
};

export default CheckBox;
