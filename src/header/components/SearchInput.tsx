import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Input } from 'antd';
import ResultModal from './ResultModal';
import { findUsersThunk } from '../../lib/store/user/thunks';
import { media, mediaQuery } from '../../lib/styles/media';
import useInput from '../../common/hooks/useInput';

const { Search } = Input;

function SearchInput() {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { onChange, form } = useInput();
  const onSearch = () => {
    setVisible(true);
    dispatch(findUsersThunk(form.search));
  };
  return (
    <>
      <Container
        placeholder="Search username"
        onPressEnter={onSearch}
        onSearch={onSearch}
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

export default React.memo(SearchInput);
