import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Empty, Modal, Spin } from 'antd';
import useReduxState from '../../common/hooks/useReduxState';
import { resetSearchResult } from '../../lib/store/user';
import FoundFriend from './FoundFriend';

function ResultModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    loading: { findUsers: loading },
    user: { searchResult },
  } = useReduxState();
  const dispatch = useDispatch();
  const onClose = () => {
    setVisible(false);
    setTimeout(() => dispatch(resetSearchResult()), 200);
  };
  return (
    <Modal title="Search Result" visible={visible} onOk={onClose} onCancel={onClose} zIndex={1000}>
      <Container>
        {loading ? <Spin /> : searchResult.map(user => <FoundFriend key={user._id} user={user} />)}
        {searchResult.length === 0 && <Empty description="검색된 사용자가 없습니다." />}
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 240px;
  overflow: auto;
`;

export default React.memo(ResultModal);
