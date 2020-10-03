import React, { useState } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import ResultModal from './ResultModal';
import { media, mediaQuery } from '../../lib/styles/media';
import useInput from '../../hooks/common/useInput';

const { Search } = Input;

function SearchInput() {
  const [visible, setVisible] = useState(false);
  const { onChange, form } = useInput();
  return (
    <>
      <Container
        placeholder="Search username"
        onSearch={() => setVisible(true)}
        name="search"
        onChange={onChange}
        value={form.search}
        disabled={visible}
      />
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

  ${mediaQuery(media.medium)} {
    width: 70%;
  }
`;

export default SearchInput;
