import React from 'react';
import styled from 'styled-components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Input, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import { AuthThunkParams } from '../../@types';
import useInput from '../../hooks/common/useInput';

type AuthFormProps = {
  type: 'login' | 'register';
  error?: string;
  onSubmit: (data: AuthThunkParams) => any;
  loading: boolean;
};

const Container = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
`;

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: right;
  text-transform: capitalize;
  a {
    color: ${palette.gray[6]};
    text-decoration: underline;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;

function AuthForm({ type, onSubmit, error, loading }: AuthFormProps) {
  const { onChange, form } = useInput();
  const onClick = () => {
    onSubmit({ type, username: form.username, password: form.password });
  };
  return (
    <Container>
      <h3>{type}</h3>
      <form>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Input placeholder="ID" prefix={<UserOutlined />} name="username" value={form.username} onChange={onChange} />
          <Input.Password
            placeholder="PW"
            prefix={<LockOutlined />}
            name="password"
            value={form.password}
            onChange={onChange}
          />
          {type === 'register' && (
            <Input.Password
              placeholder="Confirm Password"
              prefix={<LockOutlined />}
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={onChange}
            />
          )}
          <Button style={{ width: '100%' }} onClick={onClick} type="primary" loading={loading}>
            {type === 'login' ? <Link to="/">Login</Link> : <Link to="/">Register & Login</Link>}
          </Button>
        </Space>
      </form>
      <Footer>{type === 'login' ? <Link to="/register">Register</Link> : <Link to="/login">Login</Link>}</Footer>
    </Container>
  );
}

export default AuthForm;
