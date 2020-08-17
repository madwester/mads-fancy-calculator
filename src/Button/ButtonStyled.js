import styled from 'styled-components';
import fonts from '../fonts';

export const ButtonStyled = styled.button`
  background: white;
  border: 1px solid #eee;
  font-size: 24px;
  font-family: ${fonts.roboto};
  height: 70px;
  padding: 20px;
  outline: none;

  grid-column: ${({ buttonSize }) => {
    if (buttonSize === 'large') {
      return 'span 2'
    } else if (buttonSize === 'xlarge') {
      return 'span 3'
    } else {
      return 'span 1'
    };
  }}
`;