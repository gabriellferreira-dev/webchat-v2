import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  height: 40px;
  margin-bottom: 10px;

  label {
    position: absolute;
    align-self: center;
    margin-left: 8px;
    cursor: text;
    transition: 0.2s ease-in-out;
  }

  input {
    flex: 1;
    padding: 5px 10px;
    background: transparent;
    border: 1px solid rgba(250, 175, 24, 1);
    color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    outline: none;
    font-size: 1.4rem;

    &::placeholder {
      color: transparent;
    }

    &:focus + label,
    &:not(:placeholder-shown) + label {
      transform: translateY(-10px);
      font-weight: 500;
      font-size: 1.2rem;
      color: rgba(250, 175, 24, 1);
    }

    &:focus,
    &:not(:placeholder-shown) {
      padding-top: 15px;
    }
  }
`;
