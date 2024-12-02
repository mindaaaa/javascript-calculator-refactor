import Calculator from '../../src/domain/Calculator';

describe('Calculator 클래스 테스트', () => {
  test('숫자 배열의 합을 반환한다.', () => {
    const calculator = new Calculator();
    const numbers = [1, 2, 3];

    expect(calculator.sum(numbers)).toBe(6);
  });
});
