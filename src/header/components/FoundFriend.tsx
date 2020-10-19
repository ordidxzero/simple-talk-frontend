import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import { UserAddOutlined, CheckOutlined } from '@ant-design/icons';
import useReduxState from '../../common/hooks/useReduxState';
import palette from '../../lib/styles/palette';
import { UserResponse } from '../../@types';
import StyledAvatar from '../../common/components/StyledAvatar';
import useReduxAction from '../../common/hooks/useReduxAction';

type FoundFriendProps = { user: UserResponse };

function FoundFriend({ user }: FoundFriendProps) {
  const { acceptFriend, addFriend } = useReduxAction();
  const {
    loading: { addFriend: loading },
    user: { friends, recommanded },
    auth: { auth },
  } = useReduxState();
  const isMe = auth?._id === user._id;
  const isFriend = friends.find(friend => friend._id === user._id);
  const isRecommanded = recommanded.find(friend => friend._id === user._id);
  const onClick = () => {
    if (isRecommanded) {
      acceptFriend(user._id);
      return;
    }
    addFriend(user._id);
    return;
  };
  return (
    <Container>
      <StyledAvatar src={user.avatarUrl} />
      <div className="username">{user.username}</div>
      <Button
        type="primary"
        icon={isFriend || isMe ? <CheckOutlined /> : <UserAddOutlined />}
        disabled={isFriend || isMe ? true : false}
        loading={loading}
        onClick={onClick}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
  }
  .username {
    flex: 1;
    padding-left: 1rem;
  }
`;

export default React.memo(FoundFriend);
