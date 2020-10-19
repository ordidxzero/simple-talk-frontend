import React from 'react';
import styled from 'styled-components';
import { Button, Menu, Popover, Space } from 'antd';
import { UserDeleteOutlined, MessageOutlined } from '@ant-design/icons';
import { UserResponse } from '../../@types';
import StyledAvatar from '../../common/components/StyledAvatar';
import useReduxState from '../../common/hooks/useReduxState';
import useReduxAction from '../../common/hooks/useReduxAction';

type FriendProps = {
  user: UserResponse;
} & { [key: string]: any };

const { Item } = Menu;

function Friend({ user, ...props }: FriendProps) {
  const { removeFriend, startChat } = useReduxAction();
  const {
    loading: { startChat: loading },
  } = useReduxState();

  const onRemove = () => removeFriend('friends', user._id);
  const onStartChat = () => startChat(user._id);
  const content = (
    <Space style={{ width: '100%' }} direction="vertical">
      <Button type="primary" icon={<MessageOutlined />} block onClick={onStartChat} loading={loading}>
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
