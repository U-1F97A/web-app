import styled from 'styled-components';

import { Fonts } from './mixins';
import { Colors, FontWeights } from './variables';

export const ButtlerText = styled.p`
  ${Fonts.h3}
  font-weight: ${FontWeights.regular};
  color: ${Colors.black};
`;

export const Emphasized = styled.span`
  font-weight: ${FontWeights.bold};
  position: relative;
  margin: 0 4px;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 6px;
    width: 100%;
    background-color: ${Colors.yellow};
    z-index: -1;
  }
`;
