import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

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
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`;

const NoTextWrapper = styled.div`
  position: relative;
  background-color: ${Colors.green};
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const NoText = styled.div`
  position: absolute;
  top:6px;
  left:0;
  right:0;
  margin: 0 auto;
  ${Fonts.h4}
  color: ${Colors.white};
  text-align: center;
`;

const Text = styled.div`
  ${Fonts.h4}
  color: ${Colors.black};
  margin-top: 5px;
  margin-left: 16px;
`;

export default KarteQuestionBox;
