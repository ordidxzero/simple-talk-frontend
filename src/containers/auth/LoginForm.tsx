import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import useReduxState from '../../hooks/common/useReduxState';
import { loginThunk } from '../../lib/store/auth';
import { initializeForm } from '../../lib/store/input';

function LoginForm() {
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const form = useReduxState();
  const history = useHistory();

  const { username, password } = form.input;
  const { auth, authError } = form.auth;
  const { login: loading } = form.loading;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    dispatch(loginThunk({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 400) {
        setError('ID와 PW 정보가 일치하지 않습니다.');
        return;
      }
      setError('로그인 실패');
      return;
    }
    if (auth) {
      try {
        localStorage.setItem('simple_talk_auth', JSON.stringify(auth));
        history.push('/');
      } catch {
        console.log('localStorage is not working');
      }
    }
  }, [auth, authError, dispatch, history]);

  return <AuthForm type="login" onSubmit={onSubmit} loading={loading} error={error} />;
}

export default LoginForm;
