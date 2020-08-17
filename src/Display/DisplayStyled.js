import styled from 'styled-components';
import fonts from '../fonts';

export const DisplayStyled = styled.div`
  align-items: flex-end;
  background: transparent;
  border: 0;
  display: flex;
  flex-direction: column;
  font-family: ${fonts.roboto};
  height: 120px;
  justify-content: space-evenly;
  text-align: right;
  padding: 10px 20px;
  width: 400px;
`;

export const TopStyled = styled.div`
  font-size: 20px;
`;

export const BottomStyled = styled.div`
  font-size: 32px;
`;