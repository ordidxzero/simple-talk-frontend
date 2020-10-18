import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media, mediaQuery } from '../../lib/styles/media';

function HeaderLogo() {
  return <Container to="/">SIMPLE TALK</Container>;
}

const Container = styled(Link)`
  color: inherit;

  ${mediaQuery(media.medium)} {
    visibility: hidden;
  }
`;

export default React.memo(HeaderLogo);
