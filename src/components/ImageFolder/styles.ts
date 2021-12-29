import styled from 'styled-components';

type Props = {
  backgroundImage: StaticImageData;
};

export const Container = styled.div<Props>`
  background: linear-gradient(
      0deg,
      rgba(106, 199, 179, 0.1),
      rgba(106, 199, 179, 0.1)
    ),
    url(${({ backgroundImage }) => backgroundImage.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
