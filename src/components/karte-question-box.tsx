import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors, BreakPoints } from '~/styles/variables';

interface Props {
  no: number;
  text: string;
}

const KarteQuestionBox: FC<Props> = (props) => {
  const { no, text, children } = props;
  return (
    <>
      <Wrapper>
        <TextWrapper>
          <NoTextWrapper>
            <NoText>{no}</NoText>
          </NoTextWrapper>
          <Text>{text}</Text>
        </TextWrapper>
        {children}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 48px;
  border-radius: 10px;
  background-color: ${Colors.white};
  box-shadow: 4px 4px 4px rgba(66, 75, 84, 0.25);

  @media (max-width: ${BreakPoints.sm}) {
    padding: 16px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 32px;

  @media (max-width: ${BreakPoints.md}) {
    padding: 16px;
  }

  @media (max-width: ${BreakPoints.sm}) {
    padding: 8px;
  }
`;

const NoTextWrapper = styled.div`
  position: relative;
  background-color: ${Colors.green};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin-right: 16px;
`;

const NoText = styled.div`
  position: absolute;
  top:3px;
  left:0;
  right:0;
  margin: 0 auto;
  ${Fonts.h4}
  color: ${Colors.white};
  text-align: center;

  @media (max-width: ${BreakPoints.sm}) {
    top:6px;
  }

`;

const Text = styled.div`
  ${Fonts.h4}
  color: ${Colors.black};
  margin-top: 5px;
  text-align: left;
  width: 80%;
`;

export default KarteQuestionBox;
