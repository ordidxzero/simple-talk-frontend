import React, { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import useReduxState from '../../common/hooks/useReduxState';
import useAuth from '../hooks/useAuth';

function RegisterForm() {
  const [error, setError] = useState<string>();
  const { authError, register, changeText } = useAuth();
  const form = useReduxState();

  const { username, password, passwordConfirm } = form.input;
  const { register: loading } = form.loading;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ([username, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      changeText({ key: 'password', value: '' });
      changeText({ key: 'passwordConfirm', value: '' });
      return;
    }
    register({ username, password });
  };

  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
  }, [authError]);

  return <AuthForm type="register" onSubmit={onSubmit} loading={loading} error={error} />;
}

export default RegisterForm;
