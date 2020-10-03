import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Modal, Spin } from 'antd';
import useReduxState from '../../hooks/common/useReduxState';

function ResultModal({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const {
    input: { search },
  } = useReduxState();
  const onOk = () => setVisible(false);
  const onCancel = () => setVisible(false);
  useEffect(() => {
    if (visible) {
      console.log('popup modal');
    }
  }, [visible]);
  return (
    <Modal title="Search Result" visible={visible} onOk={onOk} onCancel={onCancel}>
      <Container>
        {search}
        <Spin />
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 200px;
`;

export default ResultModal;
