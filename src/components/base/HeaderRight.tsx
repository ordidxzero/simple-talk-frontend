import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Menu, Dropdown } from 'antd';
import useReduxState from '../../hooks/common/useReduxState';
import { logoutThunk } from '../../lib/store/auth';

function HeaderRight() {
  const {
    auth: { auth },
  } = useReduxState();
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logoutThunk());

  const menu = (
    <Menu style={{ width: 150 }}>
      <Menu.Item key="0">
        <div>Signed in as</div>
        <strong>{auth?.username}</strong>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={onLogout}>
        로그아웃
      </Menu.Item>
    </Menu>
  );

  return auth ? (
    <Dropdown overlay={menu} trigger={['click']} arrow>
      <StyledAvatar src={auth.avatarUrl} />
    </Dropdown>
  ) : (
    <Button>
      <Link to="/login">로그인</Link>
    </Button>
  );
}

const StyledAvatar = styled(Avatar)`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default HeaderRight;
