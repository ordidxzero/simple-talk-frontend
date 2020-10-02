import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

type ButtonStyleProps = {
  cyan?: boolean;
  fullWidth?: boolean;
};

type ButtonProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: any;
} & ButtonStyleProps;

const buttonStyle = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  text-transform: capitalize;

  background-color: ${palette.gray[8]};
  &:hover {
    background-color: ${palette.gray[6]};
  }

  ${(props: any) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props: any) =>
    props.cyan &&
    css`
      background-color: ${palette.cyan[5]};
      &:hover {
        background-color: ${palette.cyan[4]};
      }
    `}
`;

const StyledButton = styled.button`
  ${buttonStyle}
`;

const StyledLink = styled(Link)<{ cyan: number }>`
  ${buttonStyle}
`;

function Button(props: ButtonProps) {
  const { to, cyan } = props;
  return to ? (
    <StyledLink {...props} cyan={cyan ? 1 : 0} to={to} />
  ) : (
    <StyledButton {...props} />
  );
}

export default Button;
