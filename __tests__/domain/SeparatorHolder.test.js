import SeparatorHolder from '../../src/domain/SeparatorHolder';

describe('SeparatorHolder 클래스 테스트', () => {
  let separatorHolder;

  beforeEach(() => {
    separatorHolder = new SeparatorHolder();
  });

  test('커스텀 구분자가 주어진 경우 해당 구분자가 포함된 정규표현식을 반환한다.', () => {
    const customSeparator = ';';
    const regex = separatorHolder.getSeparators(customSeparator);

    expect(regex).toEqual(new RegExp(`[:,${customSeparator}]`));
  });

  test('커스텀 구분자가 null인 경우 기본 정규 표현식을 반환한다.', () => {
    const customSeparator = null;
    const regex = separatorHolder.getSeparators(customSeparator);

    expect(regex).toEqual(new RegExp(`[:,]`));
  });
});
