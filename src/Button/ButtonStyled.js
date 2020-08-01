import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  width: 25%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;

  width: ${({ buttonSize }) => {
    if (buttonSize === 'large') {
      return '50%'
    } else if (buttonSize === 'xlarge') {
      return '75%'
    } else {
      return '25%'
    };
  }}
`;