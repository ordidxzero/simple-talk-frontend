import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import ChatForm from './chat/ChatForm';
import ChatScreen from './chat/ChatScreen';

function RightContent() {
  const { roomId } = useParams<{ roomId: string | undefined }>();
  return (
    <Container>
      {roomId && (
        <>
          <ChatScreen />
          <ChatForm />
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 100px;
  height: 100%;
  background-color: ${palette.gray[0]};
`;

export default React.memo(RightContent);
