import React from 'react';
import { DisplayInputStyled } from './DisplayStyled';

const Display = ({ displayText }) => {
  return (
    <DisplayInputStyled value={displayText} />
  );
}

export default Display;