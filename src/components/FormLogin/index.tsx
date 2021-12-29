import { Formik } from 'formik';
import { Button } from '../Button';
import { InputField } from '../InputField';
import { Container } from './styles';

interface InitialValues {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const initialValues: InitialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values: InitialValues, actions) => {
    console.log(values, actions);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Container>
        <InputField id="email" name="email" label="E-mail" />
        <InputField
          id="password"
          name="password"
          label="Senha"
          type="password"
        />
        <Button type="submit">Entrar</Button>
      </Container>
    </Formik>
  );
};
