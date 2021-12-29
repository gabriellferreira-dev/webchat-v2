import React from 'react';
import { Container } from './styles';

type Props = {
  children: React.ReactNode;
};

export const FormArea: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
