import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface Props {
  type: 'button' | 'submit' | 'reset';
  outline?: boolean;
  name?: string;
  value?: string;
  id?: string;
}

export const Button: React.FC<Props> = ({ children, ...attributes }) => {
  return <Container {...attributes}>{children}</Container>;
};
