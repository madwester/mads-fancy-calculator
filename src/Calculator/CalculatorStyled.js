import styled from 'styled-components';
import fonts from '../fonts';

export const CalculatorStyled = styled.div`
  background-color: white;
  font-family: ${fonts.roboto};
  width: 400px;
`;

export const ButtonsStyled = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(4, 1fr);
`;