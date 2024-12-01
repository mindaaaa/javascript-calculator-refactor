// 커스텀 구분자를 판별한다.
class CustomSeparator {
  extract(input) {
    console.log(`[CustomSeparator] 사용자 정의 구분자 추출: ${input}`);
    return ';';
  }
}

export default CustomSeparator;
