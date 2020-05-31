import { css } from 'styled-components';

import { FontSizes, FontWeights, BreakPoints } from './variables';

const h1 = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.h1};
  font-weight: ${FontWeights.heavy};
  line-height: ${FontSizes.h1};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_h1};
    line-height: ${FontSizes.sp_h1};
  }
`;

const h2 = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.h2};
  font-weight: ${FontWeights.bold};
  line-height: ${FontSizes.h2};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_h2};
    line-height: ${FontSizes.sp_h2};
  }
`;

const h3 = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.h3};
  font-weight: ${FontWeights.bold};
  line-height: ${FontSizes.h3};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_h3};
    line-height: ${FontSizes.sp_h3};
  }
`;

const h4 = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.h4};
  font-weight: ${FontWeights.medium};
  line-height: ${FontSizes.h4};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_h4};
    line-height: ${FontSizes.sp_h4};
  }
`;

const text = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.text};
  font-weight: ${FontWeights.regular};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_text};
    line-height: ${FontSizes.sp_text};
  }
`;

const cap = css`
  font-family: 'M PLUS Rounded 1c', sans-serif;
  font-feature-settings: 'pkna';
  font-size: ${FontSizes.cap};
  font-weight: ${FontWeights.regular};

  @media (max-width: ${BreakPoints.sm}) {
    font-size: ${FontSizes.sp_cap};
    line-height: ${FontSizes.sp_cap};
  }
`;

export const Fonts = {
  h1,
  h2,
  h3,
  h4,
  text,
  cap,
} as const;
