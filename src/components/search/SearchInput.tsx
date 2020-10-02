import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import ResultModal from './ResultModal';
import { mediaQuery } from '../../lib/styles/media';

const { Search } = Input;

function SearchInput() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Container placeholder="Search username" onSearch={() => setVisible(true)} />
      <ResultModal visible={visible} setVisible={setVisible} />
    </>
  );
}

const Container = styled(Search)`
  width: 30%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  ${mediaQuery(768)} {
    width: 70%;
  }
`;

export default SearchInput;
