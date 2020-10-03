import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AuthForm from '../../components/auth/AuthForm';
import useReduxState from '../../hooks/common/useReduxState';
import { registerThunk } from '../../lib/store/auth';
import { changeText, initializeForm } from '../../lib/store/input';

function RegisterForm() {
  const [error, setError] = useState<string>();
  const dispatch = useDispatch();
  const form = useReduxState();
  const history = useHistory();

  const { username, password, passwordConfirm } = form.input;
  const { auth, authError } = form.auth;
  const { register: loading } = form.loading;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      changeText({ key: 'password', value: '' });
      changeText({ key: 'passwordConfirm', value: '' });
      return;
    }
    dispatch(registerThunk({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      setError('회원가입 실패');
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

  return <AuthForm type="register" onSubmit={onSubmit} loading={loading} error={error} />;
}

export default RegisterForm;
