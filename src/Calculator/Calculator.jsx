import React, { useState } from 'react';
import { CalculatorStyled, ButtonsStyled } from '../Calculator/CalculatorStyled';
import Button from '../Button/Button';
import Display from '../Display/Display';
import { BUTTONS } from '../Buttons';

const Calculator = () => {

  const [input, setInput] = useState('');

  const buttonOnClick = (button) => {
    if (button.buttonType === 'clear') {
      clearInput()
    } else if (button.buttonType === 'number') {
      setInput(input + button.display)
    }
  }

  const clearInput = () => {
    setInput('')
  }

  return (
    <CalculatorStyled>
      <Display displayText={input}/>
      <ButtonsStyled>
        {BUTTONS.map(button => (
          <Button 
            buttonSize={button.size}
            onClick={() => buttonOnClick(button)}
            title={button.display}
          />
        ))}
      </ButtonsStyled>
    </CalculatorStyled>
  );
}

export default Calculator;