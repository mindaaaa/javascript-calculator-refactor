class Calculator {
  sum(numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
