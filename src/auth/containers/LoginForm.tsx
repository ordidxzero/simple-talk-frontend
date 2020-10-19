import React, { useEffect, useState } from 'react';
import AuthForm from '../components/AuthForm';
import useAuth from '../hooks/useAuth';
import useLoading from '../../common/hooks/useLoading';
import useInput from '../../common/hooks/useInput';
import useReduxAction from '../../common/hooks/useReduxAction';

function LoginForm() {
  const { authError } = useAuth();
  const { login: loading } = useLoading();
  const [error, setError] = useState<string>();
  const { login, initializeForm } = useReduxAction();
  const {
    form: { username, password },
  } = useInput();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ([username, password].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    login({ username, password });
  };

  useEffect(() => {
    initializeForm();
  }, [initializeForm]);

  useEffect(() => {
    if (authError) {
      if (authError.response?.status === 400) {
        setError('ID와 PW 정보가 일치하지 않습니다.');
        return;
      }
      setError('로그인 실패');
      return;
    }
  }, [authError]);

  return <AuthForm type="login" onSubmit={onSubmit} loading={loading} error={error} />;
}

export default LoginForm;
