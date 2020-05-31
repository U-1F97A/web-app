import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

interface Props {
  name?: string;
  value: string;
  placeholder?: string;
  isError?: boolean;
  errorText?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: FC<Props> = (props) => {
  const { value, placeholder, isError, errorText, onChange } = props;
  return (
    <>
      <InputWrapper isError={isError ?? false}>
        {isError && <ErrorText>{errorText}</ErrorText>}
        <CustomInput
          type="number"
          value={value}
          placeholder={placeholder ?? ''}
          onChange={(event) => onChange(event)}
        />
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div<{ isError: boolean }>`
  height: 48px;
  width: 100%;
  border-radius: 24px;
  background-color: ${Colors.lightGray};
  padding: 0 24px;
  position: relative;

  ${({ isError }) =>
    isError &&
    css`
      border: 1px solid ${Colors.red};
    `}
`;

const ErrorText = styled.div`
  ${Fonts.h4};
  color: ${Colors.red};

  position: absolute;
  top: -20px;
  left: 16px;
`;

const CustomInput = styled.input`
  ${Fonts.h4};

  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  appearance: none;
  margin: 0;
`;

export default NumberInput;
