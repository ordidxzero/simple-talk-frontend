import React from 'react';
import { Menu } from 'antd';
import styled from 'styled-components';
import { CommentOutlined, UserOutlined } from '@ant-design/icons';
import useReduxState from '../../common/hooks/useReduxState';
import Friend from './Friend';
import Recommanded from './Recommanded';
import Room from './Room';

const { SubMenu } = Menu;

function LeftMenu() {
  const {
    user: { friends, recommanded },
    chat: { rooms },
    auth: { auth },
  } = useReduxState();
  return (
    <StyledMenu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
      <SubMenu key="friends" icon={<UserOutlined />} title="Friends">
        {friends.map(friend => (
          <Friend key={friend._id} user={friend} />
        ))}
      </SubMenu>
      <SubMenu key="recommanded" icon={<UserOutlined />} title="Recommanded Users">
        {recommanded.map(friend => (
          <Recommanded key={friend._id} user={friend} />
        ))}
      </SubMenu>
      <SubMenu key="chatrooms" icon={<CommentOutlined />} title="Chatrooms">
        {rooms.map(({ _id, participants }) => {
          const opponent = participants.filter(member => member._id !== auth?._id);
          return <Room key={_id} roomId={_id} opponent={opponent} />;
        })}
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
