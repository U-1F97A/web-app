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
  errorText?: text;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: FC<Props> = (props) => {
  const { value, placeholder, isError, errorText, onChange } = props;
  return (
    <>
      <InputWrapper isError={isError ?? false}>
        {isError && <ErrorText>{errorText}</ErrorText>}
        <CustomInput
          type="text"
          value={value}
          placeholder={placeholder ?? ''}
          onChange={(event) => onChange(event)}
        />
      </InputWrapper>
    </>
  );
};

const InputWrapper = styled.div<{ isError: boolean }>`
  height: 32px;
  width: 100%;
  border-radius: 16px;
  background-color: ${Colors.lightGray};
  padding: 0 16px;
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
  background-color: transparent; /*後ろの.password_stringを見せるため*/
`;

export default TextInput;
