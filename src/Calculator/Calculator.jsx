import React, { useState } from 'react';
import { CalculatorStyled, ButtonsStyled } from '../Calculator/CalculatorStyled';
import Button from '../Button/Button';
import Display from '../Display/Display';
import { BUTTONS, buttonType } from '../Buttons';

const Calculator = () => {

  const [currentOperand, setCurrentOperand] = useState('');
  const [prevOperand, setPrevOperand] = useState('');
  const [operation, setOperation] = useState('');

  const buttonOnClick = (button) => {
    if (button.buttonType === buttonType.CLEAR) {
      clearInput()
    } else if (button.buttonType === buttonType.NUMBER) {
      if (button.display !== '.' || button.display === '.' && currentOperand.includes('.')) {
        setCurrentOperand(currentOperand + button.display)
      }
    } else {
      chooseOperation(button.display)
    }
  }

  const chooseOperation = (operation) => {
    if (operation === '=') {
      compute();
    } else {
      setOperation(operation)
      if (prevOperand !== '') {
        compute()
      } else {
        setPrevOperand(currentOperand + operation)
        setCurrentOperand('')
      }
    }
  }

  const clearInput = () => {
    setCurrentOperand('');
    setPrevOperand('');
  }

  const compute = () => {
    let computation = 0;
    let prev = parseFloat(prevOperand);
    let current = parseFloat(currentOperand);
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current
        break;
      case '/':
        computation = prev / current
        break;
      case '%':
        computation = prev % current
        break;
      default:
        break;
    }
    setPrevOperand(computation);
    setCurrentOperand('');
  }

  return (
    <CalculatorStyled>
      <Display
        currentOperand={currentOperand}
        prevOperand={prevOperand}
      />
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