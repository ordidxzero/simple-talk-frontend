import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Button, Menu, Popover, Space } from 'antd';
import { UserDeleteOutlined, UserAddOutlined } from '@ant-design/icons';
import { UserResponse } from '../../@types';
import StyledAvatar from '../common/StyledAvatar';
import { acceptFriendThunk, removeFriendThunk } from '../../lib/store/user/thunks';

type RecommandedProps = {
  user: UserResponse;
} & { [key: string]: any };

const { Item } = Menu;

function Recommanded({ user, ...props }: RecommandedProps) {
  const dispatch = useDispatch();
  const onAccpet = () => dispatch(acceptFriendThunk(user._id));
  const onRemove = () => dispatch(removeFriendThunk('recommanded', user._id));
  const content = (
    <Space style={{ width: '100%' }} direction="vertical">
      <Button type="primary" icon={<UserAddOutlined />} onClick={onAccpet} block>
        친구 추가하기
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

export default Recommanded;
