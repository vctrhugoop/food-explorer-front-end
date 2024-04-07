import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
  width: 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  input[type='number'] {
    appearance: textfield;
    width: 2.4rem;

    ${({ theme }) => theme.FONTS.ROBOTO['300-bold']}
    background-color: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    background-color: transparent;

    &:disabled {
      opacity: 0.6;

      cursor: default;
    }
  }
`;
