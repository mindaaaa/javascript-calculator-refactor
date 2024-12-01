// 숫자 배열을 이용해 합을 반환한다.
class Calculator {
  sum(numbers) {
    console.log(`[Calculator] 숫자 합산: ${numbers}`);
    return numbers.reduce((acc, num) => acc + num, 0);
  }
}

export default Calculator;
