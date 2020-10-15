import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, Menu, Popover, Space } from 'antd';
import { UserDeleteOutlined, MessageOutlined } from '@ant-design/icons';
import { UserResponse } from '../../@types';
import StyledAvatar from '../common/StyledAvatar';
import { removeFriendThunk } from '../../lib/store/user/thunks';
import { startChatThunk } from '../../lib/store/chat';
import useReduxState from '../../hooks/common/useReduxState';

type FriendProps = {
  user: UserResponse;
} & { [key: string]: any };

const { Item } = Menu;

function Friend({ user, ...props }: FriendProps) {
  const dispatch = useDispatch();
  const {
    loading: { startChat },
  } = useReduxState();

  const onRemove = () => dispatch(removeFriendThunk('friends', user._id));
  const onStartChat = () => dispatch(startChatThunk(user._id));
  const content = (
    <Space style={{ width: '100%' }} direction="vertical">
      <Button type="primary" icon={<MessageOutlined />} block onClick={onStartChat} loading={startChat}>
        채팅하기
      </Button>
      <Button type="primary" icon={<UserDeleteOutlined />} onClick={onRemove} danger block>
        삭제하기
      </Button>
    </Space>
  );
  return (
    <Popover placement="right" title={user.username} content={content} trigger="click">
      <StyledItem {...props}>
        <StyledAvatar src={user.avatarUrl} size="small" />
        <div className="username">{user.username}</div>
      </StyledItem>
    </Popover>
  );
}

const StyledItem = styled(Item)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .username {
    flex: 1;
    padding-left: 1rem;
  }
`;

export default React.memo(Friend);
