import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import RejectButton from '~/components/reject-button';
import TextInput from '~/components/text-input';
import { ButtlerText, Emphasized } from '~/styles/common-styles';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Result: NextPage = () => {
  const router = useRouter();
  const [advice, setAdvice] = useState(
    '問診の結果から、あなたは毎日25分の時間を確保し、その時間に13ページ読むことができると推測しました。この本は253ページあるので、20日で読み終わる計算です。このスケジュールを記述した .ics ファイルを作成しました。ぜひご活用ください。'
  );

  return (
    <>
      <Layout title="書籍検索 | read, read, read!">
        <ButlerWrapper>
          <ButlerTalk>
            <CustomButtlerText>
              あなたに<Emphasized>おすすめ</Emphasized>の <br />
              読書スタイルは、<Emphasized>これ！</Emphasized>
            </CustomButtlerText>
          </ButlerTalk>
        </ButlerWrapper>
        <TextWrapper>
          <Description>{advice}</Description>
        </TextWrapper>
        <ButtonWrapper>
          <ConfirmButton
            title={'カレンダーに登録する'}
            onClick={() => router.push('/')}
          />
          <ConfirmButton
            title={'twitterで呟く'}
            onClick={() => router.push('/')}
          />
          <RejectButton
            title={'もういちどやってみる'}
            onClick={() => router.push('/')}
          />
        </ButtonWrapper>
      </Layout>
    </>
  );
};
const ButlerWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
`;

const CustomButtlerText = styled(ButtlerText)`
  line-height: 1.5;
`;

const TextWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 24px;
  text-align: center;
`;

const Description = styled.p`
  ${Fonts.text}
  color: ${Colors.black};
  max-width: 60%;
  margin: auto;
`;

const ButtonWrapper = styled.section`
  position: relative;
  margin-bottom: 48px;
  text-align: center;
`;

export default Result;
