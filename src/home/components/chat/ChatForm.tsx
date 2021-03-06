import React from 'react';
import { Button, Input } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { SendOutlined } from '@ant-design/icons';
import palette from '../../../lib/styles/palette';
import useReduxState from '../../../common/hooks/useReduxState';
import useInput from '../../../common/hooks/useInput';
import { sendMessage } from '../../../lib/api/socket';

const { TextArea } = Input;

function ChatForm() {
  const dispatch = useDispatch();
  const {
    form: { chat },
    onChange,
    onManualChange,
  } = useInput();
  const {
    auth: { auth },
  } = useReduxState();
  const { roomId } = useParams<{ roomId: string }>();
  const onSendMessage = () => {
    if (auth) {
      sendMessage(dispatch)({ user: auth._id, text: chat, room: roomId, createdAt: Date.now() });
      onManualChange('chat', '');
    }
  };
  const onPressEnter = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (!chat) {
      return event.preventDefault();
    }
    if (!event.shiftKey) {
      event.preventDefault();
      onSendMessage();
    }
  };

  return (
    <Container>
      <StyledTextArea
        placeholder="Message"
        autoSize={{ minRows: 1, maxRows: 3 }}
        value={chat}
        onChange={onChange}
        name="chat"
        onPressEnter={onPressEnter}
      />
      <Button type="primary" icon={<SendOutlined />} disabled={!chat} size="small" onClick={onSendMessage} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  z-index: 100;
  border-top: 1px solid ${palette.gray[2]};
  background-color: white;
  .ant-input-textarea {
    width: 100%;
  }
`;

const StyledTextArea = styled(TextArea)`
  margin-bottom: 8px;
`;

export default React.memo(ChatForm);
