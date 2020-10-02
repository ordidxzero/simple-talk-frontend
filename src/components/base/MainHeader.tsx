import React from 'react';
import styled from 'styled-components';
import SearchInput from '../search/SearchInput';
import palette from '../../lib/styles/palette';

function MainHeader() {
  return (
    <Container>
      <HeaderLogo>SIMPLE TALK</HeaderLogo>
      <SearchInput />
      {/* TODO: Login 했을 때 보이도록 */}
      <Right>123</Right>
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${palette.gray[0]};
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  height: 3rem;
  padding: 0 1rem;
`;

const HeaderLogo = styled.div``;

const Right = styled.div``;

export default MainHeader;
