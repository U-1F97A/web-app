import * as React from 'react';
import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

interface Props {
  bookTitle: string;
}

const TwitterShareButton: FC<Props> = (props) => {
  const { bookTitle } = props;
  return (
    <>
      <Button
        href={`https://twitter.com/intent/tweet?hashtags=team_U1F97A,techstudygroupjp&text=${bookTitle}を今日から読み始めようと思います！スケジューリングが苦手なので、readreadreadにスケジュールを作ってもらいました。&url=https://u-1f97a.netlify.app`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TextWrapper>twitterでシェアする</TextWrapper>
      </Button>
    </>
  );
};

const Button = styled.a`
  display: block;
  text-decoration: none;
  text-align: center;
  border-radius: 10px;
  background-color: ${Colors.blue};
  box-shadow: 4px 4px 4px rgba(36, 39, 43, 0.25);
  cursor: pointer;
  width: 100%;
  max-width: 400px;
  padding: 16px;
  transform: translate(0, 0);

  &:hover {
    transform: translate(3px, 3px);
  }
`;

const TextWrapper = styled.div`
  ${Fonts.h4}
  color: ${Colors.white};
`;

export default TwitterShareButton;
