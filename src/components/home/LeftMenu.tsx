import React, { useEffect } from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import { loadFriendsThunk } from '../../lib/store/user/thunks';
import useReduxState from '../../hooks/common/useReduxState';
import Friend from './Friend';

const { SubMenu } = Menu;

function LeftMenu() {
  const dispatch = useDispatch();
  const {
    user: { friends, recommanded },
  } = useReduxState();
  useEffect(() => {
    dispatch(loadFriendsThunk());
  }, [dispatch]);
  return (
    <StyledMenu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <SubMenu key="sub1" icon={<UserOutlined />} title="Friends">
        {friends.map(friend => (
          <Friend key={friend._id} user={friend} />
        ))}
      </SubMenu>
      <SubMenu key="sub2" icon={<UserOutlined />} title="Recommanded Users">
        {recommanded.map(friend => (
          <Menu.Item key={friend._id}>{friend.username}</Menu.Item>
        ))}
      </SubMenu>
      <SubMenu key="sub3" icon={<CommentOutlined />} title="Chatrooms">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <Menu.Item key="7">Option 7</Menu.Item>
        <Menu.Item key="8">Option 8</Menu.Item>
      </SubMenu>
    </StyledMenu>
  );
}

const StyledMenu = styled(Menu)`
  width: 15%;
  min-width: 200px;
  max-width: 256px;
  height: 100%;
`;

export default LeftMenu;
