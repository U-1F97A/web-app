import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { BreakPoints } from '~/styles/variables';

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
  width: 30%;
  margin-bottom: 16px;
`;

const TextWrapper = styled.div`
  margin: auto;
`;

export default ButlerTalk;
