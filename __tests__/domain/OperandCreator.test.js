import OperandCreator from '../../src/domain/OperandCreator';

describe('OperandCreator 클래스 테스트', () => {
  let operandCreator;

  beforeEach(() => {
    operandCreator = new OperandCreator();
  });

  test('사용자 입력이 숫자 배열로 반환된다.', () => {
    const userInput = '1:2:3';
    const customSeparator = null;
    const separators = new RegExp(`[:,]`);

    expect(
      operandCreator.createOperands(userInput, customSeparator, separators)
    ).toEqual([1, 2, 3]);
  });

  test('커스텀 구분자가 있는 경우 숫자 배열로 반환된다.', () => {
    const userInput = '//;\\n1;2:3';
    const customSeparator = ';';
    const separators = new RegExp(`[:,${customSeparator}]`);

    expect(
      operandCreator.createOperands(userInput, customSeparator, separators)
    ).toEqual([1, 2, 3]);
  });
});
