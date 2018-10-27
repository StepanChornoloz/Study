import { add } from './add';
import { subtitude } from './substitude';
import { divide } from './divide';
import { multiply } from './multiply';

export function calc() {
  const operandA = Number(prompt('Operand A', 0));
  const operandB = Number(prompt('Operand B', 0));
  const operator = prompt('Operator', '+');
  let result = 0;

  switch(operator) {
    case '+':
      result = add(operandA, operandB);
      break;
    case '-':
      result = subtitude(operandA, operandB);
      break;
    case '/':
      result = divide(operandA, operandB);
      break;
    case '*':
      result = multiply(operandA, operandB);
      break;
    default:
      alert('Please enter valid operator. Supported operators are +, -, *, /'); 
  }

  print(result);
}