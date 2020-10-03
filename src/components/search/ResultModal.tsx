import React from 'react';
import styled from 'styled-components';
import { Empty, Modal, Spin } from 'antd';
import useReduxState from '../../hooks/common/useReduxState';
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
  const onOk = () => setVisible(false);
  const onCancel = () => setVisible(false);
  return (
    <Modal title="Search Result" visible={visible} onOk={onOk} onCancel={onCancel}>
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

export default ResultModal;
