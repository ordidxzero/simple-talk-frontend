import React from 'react';
import { Avatar } from 'antd';
import styled from 'styled-components';

type StyledAvatarProps = {
  src: string;
  size?: number | 'large' | 'small' | 'default';
};

function StyledAvatar(props: StyledAvatarProps) {
  return <Container {...props} />;
}

const Container = styled(Avatar)`
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default StyledAvatar;
