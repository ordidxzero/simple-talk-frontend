import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { UserAddOutlined, CheckOutlined } from '@ant-design/icons';
import { acceptFriendThunk, addFriendThunk } from '../../lib/store/user/thunks';
import useReduxState from '../../hooks/common/useReduxState';
import palette from '../../lib/styles/palette';
import { UserResponse } from '../../@types';
import StyledAvatar from '../common/StyledAvatar';

type FoundFriendProps = { user: UserResponse };

function FoundFriend({ user }: FoundFriendProps) {
  const dispatch = useDispatch();
  const {
    loading: { addFriend: loading },
    user: { friends, recommanded },
  } = useReduxState();
  const isFriend = friends.find(friend => friend._id === user._id);
  const isRecommanded = recommanded.find(friend => friend._id === user._id);
  const onClick = () => {
    if (isRecommanded) {
      dispatch(acceptFriendThunk(user._id));
      return;
    }
    dispatch(addFriendThunk(user._id));
    return;
  };
  return (
    <Container>
      <StyledAvatar src={user.avatarUrl} />
      <div className="username">{user.username}</div>
      <Button
        type="primary"
        icon={isFriend ? <CheckOutlined /> : <UserAddOutlined />}
        disabled={isFriend ? true : false}
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

export default FoundFriend;
