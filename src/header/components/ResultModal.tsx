import React from 'react';
import styled from 'styled-components';
import { Empty, Modal, Spin } from 'antd';
import useReduxState from '../../common/hooks/useReduxState';
import FoundFriend from './FoundFriend';
import useReduxAction from '../../common/hooks/useReduxAction';

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
  const { resetSearchResult } = useReduxAction();
  const onClose = () => {
    setVisible(false);
    setTimeout(resetSearchResult, 200);
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
