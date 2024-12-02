import Validator from '../../src/validation/Validator';

describe('Validator 클래스 테스트', () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test('validateInput은 올바른 입력 형식일 때 예외를 던지지 않는다.', () => {
    const validInput = '//;\\n1;2;3';

    expect(() => validator.validateInput(validInput, ';')).not.toThrow();
  });

  test('validateInput은 입력 형식에 어긋나면 Error를 던진다..', () => {
    const validInput = '//;|n1;2;3';

    expect(() => validator.validateInput(validInput, null)).toThrow('[ERROR]');
  });

  test('validatePositive는 피연산자가 모두 양수라면 예외를 던지지 않는다.', () => {
    const operands = [1, 2, 3];

    expect(() => validator.validatePositive(operands)).not.toThrow();
  });

  test('validatePositive는 피연산자가 양수가 아닌 경우 Error를 던진다.', () => {
    const operands = [-1, 2, 3];

    expect(() => validator.validatePositive(operands)).toThrow('[ERROR]');
  });

  test('validateResult는 결과가 숫자라면 예외를 던지지 않는다.', () => {
    const result = 6;

    expect(() => validator.validateResult(result)).not.toThrow();
  });

  test('validateResult는 결과가 숫자가 아니라면 Error를 던진다.', () => {
    const result = '//;6';

    expect(() => validator.validateResult(result)).toThrow('[ERROR]');
  });
});
