import React from 'react';
import { ButtonStyled } from './ButtonStyled';

const Button = ({ buttonSize, onClick, title }) => {
  return (
    <ButtonStyled buttonSize={buttonSize} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}

export default Button;