import {useRef, useState} from 'react';

enum Operators {
  Add,
  Subtract,
  Multiply,
  Divide,
}

export const useCalculator = () => {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const onClear = () => {
    setNumber('0');
  };

  const onDelete = () => {
    let negative = '';
    let numberTemp = number;

    if (number.includes('-')) {
      negative = '-';
      numberTemp = number.substr(1);
    }

    if (numberTemp.length > 1) {
      setNumber(negative + numberTemp.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberForPrevious = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }

    setNumber('0');
  };

  const onBuildNumber = (numberText: string) => {
    if (number.includes('.') && numberText === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberText === '.') {
        setNumber(number + numberText);
      } else if (numberText === '0' && number.includes('.')) {
        setNumber(number + numberText);
      } else if (numberText !== '0' && !number.includes('.')) {
        setNumber(numberText);
      } else if (numberText === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + numberText);
      }
    } else {
      setNumber(number + numberText);
    }
  };

  const onChangePositiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber(`-${number}`);
    }
  };

  const onCalculateOperationAdd = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.Add;
  };

  const onCalculateOperationSubtract = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.Subtract;
  };

  const onCalculateOperationMultiply = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.Multiply;
  };

  const onCalculateOperationDivide = () => {
    changeNumberForPrevious();
    lastOperation.current = Operators.Divide;
  };

  const onCalculate = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.Add:
        setNumber(`${number1 + number2}`);
        break;
      case Operators.Subtract:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.Multiply:
        setNumber(`${number1 * number2}`);
        break;
      case Operators.Divide:
        setNumber(`${number2 / number1}`);
        break;
    }

    setPreviousNumber('0');
  };

  return {
    previousNumber,
    number,
    onClear,
    onDelete,
    onBuildNumber,
    onChangePositiveNegative,
    onCalculateOperationAdd,
    onCalculateOperationSubtract,
    onCalculateOperationMultiply,
    onCalculateOperationDivide,
    onCalculate,
  };
};
