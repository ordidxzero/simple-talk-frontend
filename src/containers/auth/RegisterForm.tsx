import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AuthThunkParams } from '../../@types';
import AuthForm from '../../components/auth/AuthForm';
import { initializeForm } from '../../lib/store/input';
import { registerThunk } from '../../lib/store/auth';

function RegisterForm() {
  const dispatch = useDispatch();

  const onSubmit = (data: AuthThunkParams) => dispatch(registerThunk(data));

  useEffect(() => {
    dispatch(initializeForm());
  }, [dispatch]);

  return <AuthForm type="register" onSubmit={onSubmit} loading={false} />;
}

export default RegisterForm;
