import React from 'react';
import UserItem from './UserItem';
import styled from 'styled-components';

export default {
  title: 'accountbook-social-page/user-item/UserItem',
  component: UserItem,
};

const Wrapper = styled.div`
  width: 600px;
`;

export const Default = (): JSX.Element => {
  return (
    <UserItem
      email={'mu1616@naver.com'}
      nickname={'mu1616'}
      profileUrl={
        'https://user-images.githubusercontent.com/26829633/101236480-eb362580-3714-11eb-9edd-d191a505418f.png'
      }
    />
  );
};

export const ApplyWrapper = (): JSX.Element => {
  return (
    <Wrapper>
      <UserItem
        email={'mu1616@naver.com'}
        nickname={'mu1616'}
        profileUrl={
          'https://user-images.githubusercontent.com/26829633/101236480-eb362580-3714-11eb-9edd-d191a505418f.png'
        }
      />
      <UserItem
        email={'lacomaco@naver.com'}
        nickname={'lacomaco'}
        profileUrl={
          'https://user-images.githubusercontent.com/26829633/101237371-7aded280-371b-11eb-9d73-b30b678b0173.png'
        }
      />
      <UserItem
        email={'bbbyung2@naver.com'}
        nickname={'bbbyung2'}
        profileUrl={
          'https://user-images.githubusercontent.com/26829633/101237312-f8eea980-371a-11eb-9aab-b5f644f7ba61.png'
        }
      />
      <UserItem
        email={'Mong-Gu@naver.com'}
        nickname={'Mong-Gu'}
        profileUrl={
          'https://user-images.githubusercontent.com/26829633/101237386-9cd85500-371b-11eb-8cab-0e0b8a919a2e.png'
        }
      />
    </Wrapper>
  );
};
