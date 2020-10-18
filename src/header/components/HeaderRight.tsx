import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Menu, Dropdown } from 'antd';
import useReduxState from '../../common/hooks/useReduxState';
import { logoutThunk } from '../../lib/store/auth';
import StyledAvatar from '../../common/components/StyledAvatar';

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

export default React.memo(HeaderRight);
