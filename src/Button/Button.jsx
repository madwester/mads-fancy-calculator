import React from 'react';
import { ButtonStyled } from './ButtonStyled';

const Button = ({ buttonSize, title }) => {
  return (
    <ButtonStyled buttonSize={buttonSize}>
      {title}
    </ButtonStyled>
  );
}

export default Button;