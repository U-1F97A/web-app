import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

interface Props {
  title: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ConfirmButton: FC<Props> = (props) => {
  const { title, onClick } = props;
  return (
    <>
      <Button type="button" onClick={onClick}>
        <TextWrapper>{title}</TextWrapper>
      </Button>
    </>
  );
};

const Button = styled.button`
  text-align: center;
  border-radius: 10px;
  background-color: ${Colors.green};
  border: none;
  box-shadow: 4px 4px 4px rgba(36, 39, 43, 0.25);
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  transform: translate(0, 0);

  &:hover {
    transform: translate(3px, 3px);
  }
`;

const TextWrapper = styled.div`
  ${Fonts.h4}
  color: ${Colors.white};
`;

export default ConfirmButton;
