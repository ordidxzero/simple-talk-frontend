import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

type AuthTemplateProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background: ${palette.gray[2]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
  }
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
`;

function AuthTemplate({ children }: AuthTemplateProps) {
  return (
    <Container>
      <WhiteBox>
        <div className="logo-area">SIMPLE TALK</div>
        {children}
      </WhiteBox>
    </Container>
  );
}

export default React.memo(AuthTemplate);
