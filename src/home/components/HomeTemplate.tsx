import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useReduxState from '../../common/hooks/useReduxState';
import MainHeader from '../../header/components/MainHeader';
import useReduxAction from '../../common/hooks/useReduxAction';

type HomeTemplateProps = {
  children: React.ReactNode;
};

function HomeTemplate({ children }: HomeTemplateProps) {
  const history = useHistory();
  const { loadFriends, loadRooms } = useReduxAction();
  const {
    auth: { auth, authError },
  } = useReduxState();

  useEffect(() => {
    loadFriends();
    loadRooms();
  }, []);

  useEffect(() => {
    if (authError || !auth) {
      history.push('/login');
    }
  }, [auth, authError, history]);

  return (
    <Container>
      <MainHeader />
      <MainContent>{children}</MainContent>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MainContent = styled.main`
  width: 100%;
  height: calc(100% - 3rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default React.memo(HomeTemplate);
