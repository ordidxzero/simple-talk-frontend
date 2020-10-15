import React from 'react';
import styled from 'styled-components';
import SearchInput from '../search/SearchInput';
import palette from '../../lib/styles/palette';
import HeaderRight from './HeaderRight';
import HeaderLogo from './HeaderLogo';

function MainHeader() {
  return (
    <>
      <Container>
        <HeaderLogo />
        <SearchInput />
        <HeaderRight />
      </Container>
      <Spacer />
    </>
  );
}

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[0]};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  width: 100%;
  height: 3rem;
  padding: 0 1rem;
  z-index: 100;
`;

const Spacer = styled.div`
  height: 3rem;
`;

export default MainHeader;
