import React from 'react';
import AuthTemplate from '../auth/components/AuthTemplate';
import RegisterForm from '../auth/containers/RegisterForm';

function AuthPage() {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
}

export default AuthPage;
