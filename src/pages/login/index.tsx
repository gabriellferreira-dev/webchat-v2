import Layout from '../../components/Layoult';

import { ContainerGrid } from '../../styles/ContainerGrid';
import { ImageFolder } from '../../components/ImageFolder';
import { FormArea } from '../../components/FormArea';

import LoginImage from '../../assets/login-image.jpg';
import Logo from '../../assets/logo.png';
import { FormLogin } from '../../components/FormLogin';

export default function Login() {
  return (
    <Layout title="Entrar - Zunny Chat">
      <ContainerGrid>
        <ImageFolder backgroundImage={LoginImage} />
        <FormArea>
          <img src={Logo.src} alt="Logo" className="logo-image" />
          <FormLogin />
        </FormArea>
      </ContainerGrid>
    </Layout>
  );
}
