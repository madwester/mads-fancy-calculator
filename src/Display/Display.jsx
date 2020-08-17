import React from 'react';
import { DisplayStyled, TopStyled, BottomStyled } from './DisplayStyled';

const Display = ({ currentOperand, prevOperand }) => {
  return (
    <DisplayStyled>
    <TopStyled>
      {prevOperand}
    </TopStyled>
    <BottomStyled>
      {currentOperand}
    </BottomStyled>
    </DisplayStyled>
  );
}

export default Display;