import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

const ButlerTalk: FC = (props) => {
  const { children } = props;
  return (
    <>
      <Wrapper>
        <Butler src="/icon.png" />
        <TextWrapper>{children}</TextWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  text-align: center;
`;

const Butler = styled.img`
  height: 200px;
`;

const TextWrapper = styled.div`
  margin: 10px 0;
`;

export default ButlerTalk;
