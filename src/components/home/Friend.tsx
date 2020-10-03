import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { UserResponse } from '../../@types';
import StyledAvatar from '../common/StyledAvatar';

type FriendProps = {
  user: UserResponse;
} & { [key: string]: any };

const { Item } = Menu;

function Friend({ user, ...props }: FriendProps) {
  return (
    <StyledItem {...props}>
      <StyledAvatar src={user.avatarUrl} size="small" />
      <div className="username">{user.username}</div>
    </StyledItem>
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

export default Friend;
