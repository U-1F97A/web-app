import { NextPage } from 'next';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import ButlerTalk from '~/components/butler-talk';
import CalenderButton from '~/components/calender-button';
import ConfirmButton from '~/components/confirm-button';
import Layout from '~/components/layout';
import RejectButton from '~/components/reject-button';
import TwitterShareButton from '~/components/twitter-share-button';
import { StoreState } from '~/store';
import types, { ScheduleState } from '~/store/schedule/types';
import { ButtlerText, Emphasized } from '~/styles/common-styles';
import { Fonts } from '~/styles/mixins';
import { Colors } from '~/styles/variables';

const Result: NextPage = () => {
  const router = useRouter();
  const scheduleState = useSelector<StoreState, ScheduleState>(
    (s) => s.schedule
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
          <Description>{scheduleState.comment}</Description>
        </TextWrapper>
        <ButtonWrapper>
          <CalenderButton href={scheduleState.s3URL ?? ``} />
          <TwitterShareButton bookTitle={'hogepiyo'} />
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
  line-height: 1.5 !important;
`;

const TextWrapper = styled.div`
  max-width: 80%;
  margin: auto;
  margin-bottom: 48px;
  text-align: center;
`;

const Description = styled.p`
  ${Fonts.text}
  color: ${Colors.black};
  margin: auto;
`;

const ButtonWrapper = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  gap: 40px;
  justify-content: center;
  margin-bottom: 64px;
`;

export default Result;
