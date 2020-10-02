import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/auth/AuthForm';
import { loginThunk } from '../../lib/store/auth';
import { initializeForm } from '../../lib/store/input';
import { AuthThunkParams } from '../../@types';

function LoginForm() {
  const dispatch = useDispatch();

  const onSubmit = (data: AuthThunkParams) => dispatch(loginThunk(data));

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  return <AuthForm type="login" onSubmit={onSubmit} loading={false} />;
}

export default LoginForm;
