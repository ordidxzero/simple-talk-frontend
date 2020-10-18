import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useScrollToBottom from '../../hooks/useScrollToBottom';
import useReduxState from '../../../common/hooks/useReduxState';
import Message from './Message';

function ChatScreen() {
  const { roomId } = useParams<{ roomId: string }>();
  const {
    chat: { rooms },
    auth: { auth },
  } = useReduxState();
  const chatScreenRef = useScrollToBottom();
  const room = rooms.find(r => r._id === roomId);
  return (
    <Container ref={chatScreenRef}>
      {room &&
        room.messages.map(({ text, user, createdAt }) => (
          <Message key={`${user}-${createdAt}`} isMe={auth?._id === user} text={text} />
        ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  flex: 1;
  height: 100%;
  display: flex;
  padding: 20px 1rem;
  flex-direction: column;
  align-items: flex-end;
  overflow: auto;
`;

export default React.memo(ChatScreen);
