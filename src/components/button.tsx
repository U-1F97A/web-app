import Link from 'next/link';
import * as React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const Button: React.FC<Props> = ({ text }) => {
  return (
    <>
      <Wrapper href="/">
        <Text>{text}</Text>
      </Wrapper>
    </>
  );
};

const Wrapper = styled(Link)`
  padding: 8px;
  border-radius: 4px;
`;

const Text = styled.div`
  font-size: 20px;
  display: inline-block;
`;

export default Button;
