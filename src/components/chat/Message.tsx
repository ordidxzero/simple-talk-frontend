import React from 'react';
import styled from 'styled-components';

function Message({ text, isMe }: { text: string; isMe: boolean }) {
  return <Container isMe={isMe}>{text}</Container>;
}

const Container = styled.span<{ isMe: boolean }>`
  margin: 5px 0;
  padding: 5px 10px;
  max-width: 70%;
  align-self: ${props => (props.isMe ? 'flex-end' : 'flex-start')};
  background-color: ${props => (props.isMe ? '#74b9ff' : '#a4b0be')};
  border-radius: 6px;
  word-wrap: break-word;
`;

export default Message;
