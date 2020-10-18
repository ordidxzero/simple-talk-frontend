import React from 'react';
import AuthTemplate from '../auth/components/AuthTemplate';
import LoginForm from '../auth/containers/LoginForm';

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
