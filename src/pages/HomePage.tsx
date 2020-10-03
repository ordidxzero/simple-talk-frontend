import React from 'react';
import styled from 'styled-components';
import MainHeaderContainer from '../containers/base/MainHeaderContainer';

function HomePage() {
  return (
    <Container>
      <MainHeaderContainer />
    </Container>
  );
}

const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export default HomePage;
