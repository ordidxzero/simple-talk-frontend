import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxState from '../../common/hooks/useReduxState';
import { loginThunk, registerThunk } from '../../lib/store/auth';
import { initializeForm, changeText as changeTextAction } from '../../lib/store/input';

function useAuth() {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    auth: { auth, authError },
  } = useReduxState();

  const login = (data: { username: string; password: string }) => dispatch(loginThunk(data));
  const register = (data: { username: string; password: string }) => dispatch(registerThunk(data));
  const changeText = (data: { key: string; value: string }) => dispatch(changeTextAction(data));

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (auth) {
      try {
        localStorage.setItem('simple_talk_auth', JSON.stringify(auth));
        history.push('/');
      } catch {
        console.log('localStorage is not working');
      }
    }
  }, [auth, history]);

  return { authError, login, register, changeText };
}

export default useAuth;
