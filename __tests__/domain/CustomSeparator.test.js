import CustomSeparator from '../../src/domain/CustomSeparator';

describe('CustomSeparator 클래스', () => {
  let customSeparator;

  beforeEach(() => {
    customSeparator = new CustomSeparator();
  });
  test('커스텀 구분자를 가져올 수 있다.', () => {
    const result = customSeparator.extract('//;\\n1;2;3');
    expect(result).toBe(';');
  });

  test('입력 형식이 다르면 null 값이 배정된다.', () => {
    const result = customSeparator.extract('//;|n1;2;3');
    expect(result).toBe(null);
  });
});
