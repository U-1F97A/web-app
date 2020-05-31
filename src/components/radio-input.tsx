import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

interface Props {
  name: string;
  items: RadioInputItem[];
  selectedKey: number;
  onChange: (key: number) => void;
}

export type RadioInputItem = {
  key: number;
  value: string;
};

const RadioInput: FC<Props> = (props) => {
  const { name, items, selectedKey, onChange } = props;
  return (
    <>
      <Wrapper>
        {items.map((item) => (
          <InputWrapper isSelected={selectedKey === item.key} key={item.key}>
            <Text isSelected={selectedKey === item.key}>{item.value}</Text>
            <CustomInput
              type="radio"
              name={name}
              onChange={() => onChange(item.key)}
              id={`${name}_${item.key}`}
            />
            <CustomLabel htmlFor={`${name}_${item.key}`}></CustomLabel>
          </InputWrapper>
        ))}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const InputWrapper = styled.div<{ isSelected: boolean }>`
  border-radius: 10px;
  background-color: ${Colors.lightGray};
  width: 100%;
  position: relative;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${Colors.green};
    `}
`;

const CustomInput = styled.input`
  display: none;
`;

const CustomLabel = styled.label`
  display: block;
  cursor: pointer;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
`;

const Text = styled.div<{ isSelected: boolean }>`

  padding: 16px;

  ${Fonts.h3}
  color: ${Colors.black};

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${Colors.white};
    `}
`;

export default RadioInput;
