import * as React from 'react';
import { FC } from 'react';

interface Props {
  name: string;
  value: Array<string>;
}

const Radio: FC<Props> = (props) => {
  const { name, value } = props;
  return (
    <>
      {value.map((item, index) => (
        <label key={index}>
          <input type="radio" name={name} />
          {item}
          <br />
        </label>
      ))}
    </>
  );
};

export default Radio;
