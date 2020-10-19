import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Dropdown } from 'antd';
import StyledAvatar from '../../common/components/StyledAvatar';
import useReduxState from '../../common/hooks/useReduxState';
import useReduxAction from '../../common/hooks/useReduxAction';

function HeaderRight() {
  const {
    auth: { auth },
  } = useReduxState();
  const { logout } = useReduxAction();

  const menu = (
    <Menu style={{ width: 150 }}>
      <Menu.Item key="0">
        <div>Signed in as</div>
        <strong>{auth?.username}</strong>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1" onClick={logout}>
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
