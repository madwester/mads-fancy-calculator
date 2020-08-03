import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background: white;
  border: 1px solid #eee;
  font-size: 22px;
  height: 70px;
  padding: 20px;

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