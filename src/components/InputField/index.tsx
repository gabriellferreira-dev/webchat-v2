import { Field } from 'formik';
import React from 'react';
import { InputAttributes } from '../../types/InputAttributes';
import { Container } from './styles';

export const InputField: React.FC<InputAttributes> = (attributes) => {
  return (
    <Container>
      <Field {...attributes} placeholder="fulano@gmail.com" />
      <label htmlFor={attributes.id}>{attributes.label}</label>
    </Container>
  );
};
