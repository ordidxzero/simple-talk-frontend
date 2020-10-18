import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import StyledAvatar from '../../common/components/StyledAvatar';
import { UserResponse } from '../../@types';

type RoomProps = {
  roomId: string;
  opponent: UserResponse[];
} & { [key: string]: any };

const { Item } = Menu;

function Room({ roomId, opponent, ...props }: RoomProps) {
  const history = useHistory();
  const toRoom = () => history.push(`/chat/${roomId}`);
  const user = opponent[0];
  return (
    <StyledItem {...props} onClick={toRoom}>
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

export default React.memo(Room);
