import styled from 'styled-components';

interface ButtonStyles {
  outline?: boolean;
}

export const Container = styled.button<ButtonStyles>`
  padding: 0 80px;
  height: 40px;
  background: rgba(250, 175, 24, 1);
  border: none;
  border-radius: 5px;
  align-self: center;
  color: #fff;
`;
