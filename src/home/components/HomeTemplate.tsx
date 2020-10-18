import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useReduxState from '../../common/hooks/useReduxState';
import { loadRoomsThunk } from '../../lib/store/chat';
import { loadFriendsThunk } from '../../lib/store/user/thunks';
import MainHeader from '../../header/components/MainHeader';

type HomeTemplateProps = {
  children: React.ReactNode;
};

function HomeTemplate({ children }: HomeTemplateProps) {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    auth: { auth, authError },
  } = useReduxState();

  useEffect(() => {
    dispatch(loadFriendsThunk());
    dispatch(loadRoomsThunk());
  }, [dispatch]);

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
