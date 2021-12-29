import React from 'react';

import { Container } from './styles';

type Props = {
  backgroundImage: StaticImageData;
};

export const ImageFolder: React.FC<Props> = ({ backgroundImage }) => (
  <Container backgroundImage={backgroundImage}></Container>
);
