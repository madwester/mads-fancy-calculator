import React from 'react';
import { CalculatorStyled, ButtonsStyled } from '../Calculator/CalculatorStyled';
import Button from '../Button/Button';
import Display from '../Display/Display';

const buttonSize = {
  DEFAULT: 'default',
  LARGE: 'large',
  XLARGE: 'xlarge'
}

const BUTTONS = [{
    display: "C",
    size: buttonSize.LARGE
  },
  {
    display: "%",
    size: buttonSize.DEFAULT
  },
  {
    display: "/",
    size: buttonSize.DEFAULT
  },
  {
    display: "7",
    size: buttonSize.DEFAULT
  },
  {
    display: "8",
    size: buttonSize.DEFAULT
  },
  {
    display: "9",
    size: buttonSize.DEFAULT
  },
  {
    display: "x",
    size: buttonSize.DEFAULT
  },
  {
    display: "4",
    size: buttonSize.DEFAULT
  },
  {
    display: "5",
    size: buttonSize.DEFAULT
  },
  {
    display: "6",
    size: buttonSize.DEFAULT
  },
  {
    display: "-",
    size: buttonSize.DEFAULT
  },
  {
    display: "1",
    size: buttonSize.DEFAULT
  },
  {
    display: "2",
    size: buttonSize.DEFAULT
  },
  {
    display: "3",
    size: buttonSize.DEFAULT
  },
  {
    display: "+",
    size: buttonSize.DEFAULT
  },
  {
    display: "0",
    size: buttonSize.XLARGE
  },
  {
    display: "=",
    size: buttonSize.DEFAULT
  }
]

const Calculator = () => {
  return (
    <CalculatorStyled>
      <Display />
      <ButtonsStyled>
        {BUTTONS.map(button => (
          <Button 
            buttonSize={button.size} 
            title={button.display}
          />
        ))}
      </ButtonsStyled>
    </CalculatorStyled>
  );
}

export default Calculator;