import React from 'react';
import styled from 'styled-components';
import MainHeader from '../base/MainHeader';

type HomeTemplateProps = {
  children: React.ReactNode;
};

function HomeTemplate({ children }: HomeTemplateProps) {
  return (
    <Container>
      <MainHeader />
      <MainContent>{children}</MainContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContent = styled.main`
  width: 100%;
  height: calc(100% - 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HomeTemplate;
